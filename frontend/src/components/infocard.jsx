function InfoCard({ title, items }) {

    return (

        <div className="info-card">

            <h2>{title}</h2>

            <ul>

                {items.map((item, index) => (

                    <li key={index}>{item}</li>

                ))}

            </ul>

        </div>

    );

}

export default InfoCard;