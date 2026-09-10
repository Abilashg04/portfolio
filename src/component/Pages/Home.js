import '../Styles/Home.css'
import {FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaDownload, FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaArrowRight} from "react-icons/fa";
function Home(){
    return(
        <>
        <section className='home' id='home'>
            <div className='home-content'>
                <p className='hello'>
                    Hello, I'm
                </p>
                <h1>Abilash <span>G</span></h1>
                <h2>Aspiring <span>Web Developer</span></h2>
                <div className='small-line'></div>
                <p className='description'>
                    I am a Computer Science Engineering student passionate about creating modern, responsive and user-friendly web applications.
                </p>

                <div className='buttons'>
                    <a href='#projects' className='btn primary'>View Projects <FaArrowRight /> </a>
                    <a href='/resume..pdf' download='Abilash-Reume.pdf' className='btn secondary'>Download CV <FaDownload /> </a>
                </div>

                <div className='tech-stack'>
                    <div className='tech-item'>
                        <FaHtml5 className='html-icon' />
                        <span>HTML</span>
                    </div>
                    <div className='tech-item'>
                        <FaCss3Alt className='css-icon' />
                        <span>CSS</span>
                    </div>
                    <div className='tech-item'>
                        <FaJs className='js-icon' />
                        <span>JavaScriptr</span>
                    </div>
                    <div className='tech-item'>
                        <FaReact className='react-icon' />
                        <span>React</span>
                    </div>
                    <div className='tech-item'>
                        <FaPython className='puthon-icon' />
                        <span>Python</span>
                    </div>
                </div>
            </div>

            <div className='profile-container'>
                <div className='profile-card'>
                    <div className='profile-circle'>
                        <span>AG</span>
                    </div>
                    <h3>Web Developer</h3>
                    <p>Frontend • Backend • Full Stack</p>

                    <div className='social-icons'>
                        <a href='https://github.com/Abilashg04' target='_blank' rel='noreferrer' aria-label='GitHub'>
                            <FaGithub />
                        </a>
                        <a href='https://www.linkedin.com/in/abilash2004' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
                            <FaLinkedin />
                        </a>
                        <a href='https://www.instagram.com/abi_2004__' target='_blank' rel='noreferrer' aria-label='Instagram'>
                            <FaInstagram />
                        </a>
                        <a href='mailto:abilashg2004@gmail.com' aria-label='Email'>
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default Home;