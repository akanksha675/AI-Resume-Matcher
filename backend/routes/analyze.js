const express = require("express");
const multer = require("multer");
const extractText = require("../utils/pdfParser");
const analyzeResume = require("../services/geminiService");
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });

router.post("/", upload.single("resume"), async (req, res) => {

    try {

        console.log("========== REQUEST RECEIVED ==========");

        console.log("req.file =", req.file);

        if (!req.file) {
            return res.status(400).json({
                message: "No file uploaded"
            });
        }

        console.log("Reading PDF...");

        const resumeText = await extractText(req.file.path);

const jobDescription = req.body.jobDescription;

const aiResponse = await analyzeResume(
    resumeText,
    jobDescription
);

console.log("========== AI RESPONSE ==========");
console.log(aiResponse);

res.json({
    success: true,
    result: aiResponse
});
    } catch (err) {

        console.log("ERROR OCCURRED");
        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

});

module.exports = router;