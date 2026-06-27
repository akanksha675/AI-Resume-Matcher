function RecommendationCard({ recommendation }) {

    return (

        <div className="recommendation-card">

            <h2>⭐ Overall Recommendation</h2>

            <p>{recommendation}</p>

        </div>

    );

}

export default RecommendationCard;