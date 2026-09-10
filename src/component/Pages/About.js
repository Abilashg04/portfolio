import '../Styles/About.css'
import{FiUser, FiMapPin, FiBookOpen, FiCode, FiDownload} from 'react-icons/fi'

function About(){
    return(
        <section className='about' id='about'>
            <div className='about-container'>
                <div className='about-image-section'>
                    <div className='about-image-card'>
                        <div className='about-avatar'>
                            <FiUser />
                        </div>

                        <div className='experience-badge'>
                            <span>🧑‍🏫</span>
                            <div>
                                <strong>Web Developer</strong>
                                <small>Developer</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='about-content'>
                    <p className='section-subtitle'>
                        ABOUT ME
                    </p>
                    <h2>
                        Bulding Ideas Info <span>Digital Experiences</span>
                    </h2>
                    <div className='about-line'></div>
                    <p className='about-description'>
                        I am a Computer Science Engineering student and an aspiring Web Developer passionate about building modern, responsive and user-friendly web applications.
                    </p>
                    <p className='about-description'>
                        I enjoy working with both frontend and backend technologies.
                        I continuously improve my skills by creating projects and learning new technologies
                    </p>

                    <div className='about-info'>
                        <div className='info-item'>
                            <div className='info-icon'>
                                <FiBookOpen />
                            </div>

                            <div>
                                <h4>Education</h4>
                                <p>Computer Science and Engineering</p>
                            </div>
                        </div>
                        <div className='info-item'>
                            <div className='info-icon'>
                                <FiCode />
                            </div>

                            <div>
                                <h4>Specialization</h4>
                                <p>Full Stack Web Development</p>
                            </div>
                        </div>
                        <div className='info-item'>
                            <div className='info-icon'>
                                <FiMapPin />
                            </div>

                            <div>
                                <h4>Location</h4>
                                <p>Villukuri, Kanyakumari</p>
                            </div>
                        </div>
                    </div>

                    <a href='/resume..pdf' download='Abilash-Reume.pdf' className='about-btn'>
                        <FiDownload />
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    )
}
export default About;