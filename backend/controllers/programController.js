const Programs = require("./../models/programSchema");
const catchAsync = require("./../utils/catchAsync");

exports.deleteProgram = catchAsync(async (req, res, next) => {
  const doc = await Programs.findOne({ title: req.body.title });
  if (!doc) {
    return next(new AppError("No document found with that ID", 404));
  }
  await Programs.deleteOne({ title: req.body.title });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.updateProgram = catchAsync(async (req, res, next) => {
  const doc = await Programs.findOne({ title: req.body.title });

  if (!doc) {
    return next(new AppError("No document found with that ID", 404));
  }

  //update doc with decription = req.body.decription
  await Programs.updateOne(
    { title: req.body.title },
    { title: req.body.title, description: req.body.description }
  );

  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});

exports.addProgram = catchAsync(async (req, res, next) => {
  const doc = await Programs.create(req.body);
 console.log("as");
  res.status(201).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});
