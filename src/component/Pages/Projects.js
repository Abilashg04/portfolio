import { FiArrowUpRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import ProjectData from '../Data/ProjectData';
import '../Styles/Projects.css'
function Projects(){
    return(
        <>
        <section className="projects" id="projects">
            <div className="projects-container">
                <div className="projects-heading">
                    <p>MY PROJECTS</p>
                    <h2>
                        Things I Have <span>Built</span>
                    </h2>

                    <div className="projects-line"></div>

                    <p className="projects-description">
                        Here are some of the projects I have created while learning and developing my skills in web development.
                    </p>
                </div>

                <div className="projects-grid">
                    {ProjectData.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                />

                                <div className="project-overlay">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-icon">
                                            <FiGithub />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-icon">
                                            <FiExternalLink />
                                    </a>
                                </div>
                            </div>

                            <div className="project-content">

                                <p className="project-category">
                                    {project.category}
                                </p>
                                <h3>{project.title}</h3>
                                <p className="project-description">
                                    {project.description}
                                </p>

                                <div className="project-tech">
                                    {project.technologies.map((icon, techIndex) => (
                                        <span key={techIndex}>
                                            {icon}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="view-project">
                                        View Project
                                        <FiArrowUpRight />
                                </a>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}
export default Projects;