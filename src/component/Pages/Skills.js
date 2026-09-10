import SkillsData from '../Data/SkillsData';
import '../Styles/Skills.css';
function Skills(){
    return(
        <>
        <section className="skills" id="skills">
            <div className="skills-container">
                <div className="skills-heading">
                    <p>MY SKILLS</p>
                    <h2>
                        Technologies I <span>Work With</span>
                    </h2>

                    <div className="skills-line"></div>
                    <p className="skills-description">
                        I use modern frontend and backend technologies to create responsive, scalable and user-friendly web applications.
                    </p>
                </div>

                <div className="skills-grid">
                    {SkillsData.map((skill, index) => (
                        <div className="skill-card" key={index}
                        >

                    <div className={`skill-icon ${skill.className}`}>
                        {skill.icon}
                    </div>

                    <div className="skill-info">
                        <h3>{skill.name}</h3>
                        <p>{skill.level}</p>
                    </div>

                    <div className="skill-arrow">
                        →
                    </div>

                </div>
                ))}
            </div>

        </div>

        </section>
        </>
    )
}
export default Skills;