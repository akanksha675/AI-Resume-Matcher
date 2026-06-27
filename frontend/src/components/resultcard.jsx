function ResultCard({ result }) {

    return (

        <div className="result-card">

            <h2>Resume Analysis</h2>

            <div className="score-card">

                <h1>{result.matchPercentage}%</h1>

                <div className="progress">

                    <div
                        className="progress-fill"
                        style={{width: `${result.matchPercentage}%`}}
                    ></div>

                </div>

            </div>

            <div className="section">

                <h2>✅ Matched Skills</h2>

  <div className="chip-container">
    {result?.matched_skills?.map((skill, index) => (
      <span key={index} className="chip matched">
        {skill}
      </span>
    ))}
  </div>
</div>

            <div className="section">

               
  <h2>❌ Missing Skills</h2>

  <div className="chip-container">
    {result?.missing_skills?.map((skill, index) => (
      <span key={index} className="chip missing">
        {skill}
      </span>
    ))}
  </div>
</div>

            <div className="section">

                <h3>💪 Strengths</h3>

                <ul>

                    {result.strengths.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))}

                </ul>

            </div>

            <div className="section">

                <h3>💡 Suggestions</h3>

                <ul>

                    {result.suggestions.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))}

                </ul>

            </div>

            <div className="recommendation">

                <h3>⭐ Overall Recommendation</h3>

                <p>{result.overallRecommendation}</p>

            </div>

        </div>

    )

}

export default ResultCard;