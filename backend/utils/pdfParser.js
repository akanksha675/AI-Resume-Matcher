const fs = require("fs");
const pdf = require("pdf-parse");

async function extractText(filePath) {

    console.log("Reading:", filePath);

    const buffer = fs.readFileSync(filePath);

    console.log("Buffer Size:", buffer.length);

    const data = await pdf(buffer);

    console.log("PDF Parsed!");

    return data.text;
}

module.exports = extractText;