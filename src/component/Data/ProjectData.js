import { FaReact, FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiFlask, SiMongodb } from "react-icons/si";
import img1 from '../Images/project1.png';
import img2 from '../Images/project2.png';
import img3 from '../Images/project3.png';

const ProjectData=[
    {
        title:"Credit Card Fraud Detection",
        description:"A web-based system that helps identify suspicious credit card transactions using a fraud detection system.",
        category:"Final Year Project",
        image: img1,
        technologies:[
            <FaHtml5 />, <FaCss3Alt />, <FaPython />, <SiFlask />, <SiMongodb />
        ],
        github:"#",
        live:"#"
    },
    {
        title:"MENSTYLE",
        description:"A modern men's fashion e-commerce website with product browsing, categories, offers, login and admin management.",
        category:"E-Commerce Website",
        image:img2,
        technologies:[
            <FaHtml5 />, <FaCss3Alt />, <SiJavascript />, <SiFlask />
        ],
        github:"#",
        live:"#"
    },
    {
        title:"Personal Portfolio",
        description:"A responsive personal portfolio website built with React to showcase my skills, projects, education and contact information.",
        category:"Web Development",
        image:img3,
        technologies:[
            <FaReact />, <FaCss3Alt />, <SiJavascript />
        ],
        github:"#",
        live:"#"
    }
]
export default ProjectData;