const express = require("express");
const multer = require("multer");
const fs = require("fs");
const pdf = require("pdf-parse");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
   "/upload-resume",
  upload.single("resume"),
  async (req, res) => {

    try {

      console.log("UPLOAD ROUTE HIT");

      const dataBuffer = fs.readFileSync(req.file.path);

      const data = await pdf(dataBuffer);

      console.log("PDF TEXT:");
      console.log(data.text);

      res.json({
        message: "Resume uploaded successfully",
        text: data.text
      });

    } catch (error) {

      console.log("PDF PARSE ERROR:");
      console.log(error);

      res.status(500).json({
        message: "Error reading PDF"
      });

    }

  });


module.exports = router;