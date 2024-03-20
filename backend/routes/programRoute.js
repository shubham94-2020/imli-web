const express = require("express");
// const programController = require("./../controllers/programController");
const cors = require("cors");
const Programs = require("./../models/programSchema");
const router = express.Router();

// router.post("/programs", programController.addProgram);
// router.delete("/programs", programController.deleteProgram);
router.use(cors());
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    // const { id,title, description} = req.body;
    const newProgram = await Programs.create(req.body);
    // await newProgram.save();
    res.status(200).json({ messgae: "program  created!" });
  } catch (error) {
    res.status(200).json({ messgae: " error in programcreation!" });
  }
});
router.get("/", async (req, res) => {
  try {
    let program = await Programs.find();
    if (program.length > 0) {
      res.send(program);
    } else {
      res.send({ result: "No product found" });
    }
  } catch (error) {
    res.status(200).json({ messgae: " error in program !" });
  }
});

router.delete("/",async (req, res, next) => {
  const doc = await Programs.findOne({ title: req.body.title });
  await Programs.deleteOne({ title: req.body.title });

  res.status(204).json({
    status: "success",
    data: null,
  });
});



module.exports = router;
