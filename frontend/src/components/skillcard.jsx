function SkillsCard({ title, skills, type }) {

    return (

        <div className="skills-card">

            <h2>{title}</h2>

            <div className="skills-list">

                {skills.map((skill, index) => (

                    <span
                        key={index}
                        className={type === "matched" ? "green-badge" : "red-badge"}
                    >
                        {skill}
                    </span>

                ))}

            </div>

        </div>

    );

}

export default SkillsCard;