const { GoogleGenerativeAI } = require("@google/generative-ai");

// Check if API key is loaded
console.log("Gemini Key Loaded:", process.env.GEMINI_API_KEY ? "YES" : "NO");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function analyzeResume(resumeText, jobDescription) {
    try {

        console.log("Step 1: Creating model...");

        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash"
        });

        console.log("Step 2: Model created.");

        const prompt = `
You are an expert ATS (Applicant Tracking System) Resume Analyzer.

Compare the candidate's resume with the given job description.

Analyze the resume carefully and return ONLY valid JSON.

Return the response in exactly this format:

{
  "matchPercentage": 0,
  "matched_skills": [],
  "missing_skills": [],
  "strengths": [],
  "suggestions": [],
  "overallRecommendation": ""
}

Rules:
- matchPercentage should be between 0 and 100.
- matched_skills should contain only the skills present in both resume and job description.
- missing_skills should contain skills required in the job description but absent in the resume.
- strengths should list positive observations about the resume.
- suggestions should provide practical improvements to increase ATS score.
- overallRecommendation should be a short paragraph (2–3 sentences).

Resume:
${resumeText}

Job Description:
${jobDescription}
`;

        console.log("Step 3: Sending request to Gemini...");

        const result = await model.generateContent(prompt);

        console.log("Step 4: Response received.");

        let text = result.response.text();

        console.log("Raw Gemini Response:");
        console.log(text);

        // Remove markdown formatting if Gemini wraps JSON in ```json
        text = text
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        console.log("Cleaned Response:");
        console.log(text);

        // Convert string into JavaScript object
        const jsonResponse = JSON.parse(text);

        console.log("Parsed JSON:");
        console.log(jsonResponse);

        return jsonResponse;

    } catch (error) {

        console.error("========== GEMINI ERROR ==========");
        console.error(error);

        return {
            matchPercentage: 0,
            matched_skills: [],
            missing_skills: [],
            strengths: [],
            suggestions: [
                "Unable to analyze the resume due to an internal AI error."
            ],
            overallRecommendation: "Analysis failed. Please try again."
        };
    }
}

module.exports = analyzeResume;