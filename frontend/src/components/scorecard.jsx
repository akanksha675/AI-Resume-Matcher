function ScoreCard({ score }) {

    let status = "";
    let color = "";

    if (score >= 80) {
        status = "Excellent Match";
        color = "#22c55e";
    } else if (score >= 60) {
        status = "Good Match";
        color = "#f59e0b";
    } else {
        status = "Needs Improvement";
        color = "#ef4444";
    }

    return (

        <div className="score-card">

            <h2>ATS Match Score</h2>

            <h1 style={{ color }}>{score}%</h1>

            <div className="progress">

                <div
                    className="progress-fill"
                    style={{
                        width: `${score}%`,
                        background: color
                    }}
                ></div>

            </div>

            <h3 style={{ color }}>{status}</h3>

        </div>

    );

}

export default ScoreCard;