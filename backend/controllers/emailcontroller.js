const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const Mail = require("./../models/emailSchema");
const catchAsync = require("./../utils/catchAsync");

dotenv.config();

const addMail = catchAsync(async (req, res, next) => {
  const doc = await Mail.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});




const sendMailT = async () => {
  // let teach = await Teacher.findById(teacher);
  // let subject = await Subject.findById(teach.teachSubject);
  // subject=subject.subName;

  // subject=Subject.findById(subject).subName;
  // let cl = teach.teachSclass;
  // let cla=await Class.findById(cl).sclassName;
  // let students = await Student.find({ sclassName: cl });
  // let receivers = students.map((student) => student.semail);

  console.log(transporter.options.host);
  const mailOptions = {
    from: "maheshthakare149@gmail.com",
    to: "maheshsocials1234@gmail.com",
    subject: "Newsletter Subsccription",
    html: `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Subscribing!</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            text-align: center;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
            font-size: 18px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Thank You for Subscribing!</h1>
        <p>We appreciate you joining our newsletter.</p>
        <p>Stay tuned for exciting updates .</p>
    </div>
</body>
</html>
`,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email Sent Successfully");
    }
  });
};

module.exports = { sendMailT, addMail };
