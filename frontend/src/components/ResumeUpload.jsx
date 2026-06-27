import { useState } from "react";
import ScoreCard from "./scorecard";
import SkillsCard from "./skillcard";
import InfoCard from "./infocard";
import RecommendationCard from "./recomendationcard";

function ResumeUpload() {
  const [result, setResult] = useState(null);
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadResume = async () => {
    if (!resume) {
      alert("Please select a resume.");
      return;
    }

    if (jobDescription.trim() === "") {
      alert("Please enter the Job Description.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("jobDescription", jobDescription);

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      console.log(data);

      // Store only the AI result object
      setResult(data.result);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Unable to connect to backend.");
    }
  };

  return (
    <div>

      <h2>📄 Upload Resume</h2>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setResume(e.target.files[0])}
      />

      <br /><br />

      <h2>📝 Job Description</h2>

      <textarea
        rows="10"
        cols="80"
        placeholder="Paste Job Description Here..."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />

      <br /><br />

      <button onClick={uploadResume}>
        Analyze Resume
      </button>

      <br /><br />

      {loading && (
        <h2>🤖 AI is analyzing your resume...</h2>
      )}

      {result && (
        <>

          <ScoreCard score={result.matchPercentage} />

          <div className="grid">

            <SkillsCard
              title="✅ Matched Skills"
              skills={result.matched_skills}
              type="matched"
            />

            <SkillsCard
              title="❌ Missing Skills"
              skills={result.missing_skills}
              type="missing"
            />

          </div>

          <div className="grid">

            <InfoCard
              title="💪 Resume Strengths"
              items={result.strengths}
            />

            <InfoCard
              title="💡 AI Suggestions"
              items={result.suggestions}
            />

          </div>

          <RecommendationCard
            recommendation={result.overallRecommendation}
          />

        </>
      )}

    </div>
  );
}

export default ResumeUpload;