import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa';
import { SiDjango, SiFlask, SiMongodb, SiMysql, SiGit, SiGithub } from 'react-icons/si';

const SkillsData=[
    {
        name:"HTML5", level:"Advanced", icon: <FaHtml5 />, className:"html"
    },
    {
        name:"CSS3", level:"Advanced", icon: <FaCss3Alt />, className:"css"
    },
    {
        name:"JavaScript", level:"Intermediate", icon: <FaJs />, className:"javascript"
    },
    {
        name:"React", level:"Intermediate", icon: <FaReact />, className:"react"
    },
    {
        name:"Python", level:"Intermediate", icon: <FaPython />, className:"python"
    },
    {
        name:"Django", level:"Intermediate", icon: <SiDjango />, className:"django"
    },
    {
        name:"Flask", level:"Intermediate", icon: <SiFlask />, className:"flask"
    },
    {
        name:"MongoDB", level:"Intermediate", icon: <SiMongodb />, className:"mongodb"
    },
    {
        name:"MySQL", level:"Intermediate", icon: <SiMysql />, className:"mysql"
    },
    {
        name:"Git", level:"Intermediate", icon: <SiGit />, className:"git"
    },
    {
        name:"Github", level:"Intermediate", icon: <SiGithub />, className:"github"
    }
];
export default SkillsData;