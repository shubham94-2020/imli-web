const User= require('./../models/userSchema');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const jwt= require('jsonwebtoken');

const signToken = id => {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  };
  
  const createSendToken = (user, statusCode, res) => {
    const token = signToken(user._id);
    const cookieOptions = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
    // if (process.env.NODE_ENV === 'production')
    // {
         cookieOptions.secure = true;
    // }
    res.cookie('jwt', token, cookieOptions);
    res.status(statusCode).json({
      status: 'success',
      token,
      data: {
        user: user,
      },
    });
  };

  exports.signup = catchAsync(async (req, res, next) => {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
  
    createSendToken(newUser, 201, res);
  });
  
  exports.login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    console.log(req.user);
    //1) Check if Both email and password is provided
    if (!email || !password) {
      return next(new AppError('Please Provide both email and password', 400));
    }
    //2)check if user exists and password is correct
    const user = await User.findOne({ email: email }).select('+password'); //password is hidden that's why explicitly mentioned to show it
  
    if (!user || !(await user.correctPassword(password, user.password))) {
      next(new AppError('Invalid email or password', 401));
    }
    //3)if everything is okay , send token to client
    createSendToken(user, 200, res);
  });
  
  exports.protect = catchAsync(async (req, res, next) => {
    // 1) Getting token and check of it's there
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
      return next(
        new AppError('You are not logged in! Please log in to get access.', 401)
      );
    }
  
    //2) token verification
    const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  
    //3) Check if user still exists
    const currentUser = await User.findById(decode.id);
    if (!currentUser) {
      return next(new AppError('User not found', 404));
    }
  
    //4) Check if user have changed the password after token was issued
    if (currentUser.changedPasswordAfter(decode.iat)) {
      return next(
        new AppError('Your password has changed! Please login again.', 401)
      );
    }
  
    req.user = currentUser; // we have to pass data to the next middleware about who's the user now
    //it is the req object which passes from middleware to middleware
    next();
  });
  
  //...roles will create an array of all the argument that are present
  exports.restrictTo = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return next(
          new AppError('You are not authorized to access this route', 403)
        );
      }
      next();
    };
  };
  
  exports.forgotPassword = catchAsync(async (req, res, next) => {
    // 1) Get user based on POSTed email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return next(new AppError('There is no user with email address.', 404));
    }
  
    // 2) Generate the random reset token
    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });
  
    // 3) Send it to user's email
    const resetURL = `${req.protocol}://${req.get(
      'host'
    )}/api/v1/users/resetPassword/${resetToken}`;
  
    const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;
  
    try {
      await sendEmail({
        email: user.email,
        subject: 'Your password reset token (valid for 10 min)',
        message,
      });
  
      res.status(200).json({
        status: 'success',
        message: 'Token sent to email!',
      });
    } catch (err) {
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save({ validateBeforeSave: false });
  
      return next(
        new AppError('There was an error sending the email. Try again later!'),
        500
      );
    }
  });
  
  exports.resetPassword = catchAsync(async (req, res, next) => {
    // 1) Get user based on the token
    const hashedToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');
  
    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });
  
    // 2) If token has not expired, and there is user, set the new password
    if (!user) {
      return next(new AppError('Token is invalid or has expired', 400));
    }
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
  
    // 3) Update changedPasswordAt property for the user
    // 4) Log the user in, send JWT
    createSendToken(user, 200, res);
  });
  
  exports.updatePassword = catchAsync(async (req, res, next) => {
    //1)Get user from collection
    const user = await User.findById(req.user.id).select('+password');
    //2)Check if posted  current password id  correct
    if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
      return next(new AppError('Current Password is wrong', 401));
    }
    //3)If so, update password
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    await user.save();
    //4)Log user in , send JWT
    createSendToken(user, 200, res);
  });
  
  // Only for rendered pages, no errors!
  
  exports.isLoggedIn = async (req, res, next) => {
    if (req.cookies.jwt) {
      try {
        // 1) verify token
        const decoded = await promisify(jwt.verify)(
          req.cookies.jwt,
          process.env.JWT_SECRET
        );
  
        // 2) Check if user still exists
        const currentUser = await User.findById(decoded.id);
        if (!currentUser) {
          return next();
        }
  
        // 3) Check if user changed password after the token was issued
        if (currentUser.changedPasswordAfter(decoded.iat)) {
          return next();
        }
  
        // THERE IS A LOGGED IN USER
        res.locals.user = currentUser;
        return next();
      } catch (err) {
        return next();
      }
    }
    next();
  };
  