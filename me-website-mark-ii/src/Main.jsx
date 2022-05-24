import { useState } from 'react'; 
import { FaLink, FaInfoCircle, FaChartBar, FaProjectDiagram, FaSuitcase, FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaDiscord } from 'react-icons/fa'

import Canvas from './components/Canvas'
import Aboutmepage from './components/Aboutmepage';
import Intro from './components/Intro'
import Mainmenu from './components/Mainmenu';
import Bars from './components/Bars';
import Contentlogo from './components/Contentlogo';
import Music from './components/Music';
import Sidemenu from './components/Sidemenu';
import Skillpage from './components/Skillpage';
import Projectpage from './components/Projectpage';
import Experiencepage from './components/Experiencepage';
import Linktree from './components/Linktree';
import Constellation from './components/Constellation';

const Main = () => 
{
  // Array for Menu Selection
  const [menuSelection, setMenuSelection] = useState([
    {
        id: 1,
        name: "About Me",
        symbol: <FaInfoCircle size={50} />
    },
    {
        id: 2,
        name: "Skills",
        symbol: <FaChartBar size={50} />
    },
    {
        id: 3,
        name: "Projects",
        symbol: <FaProjectDiagram size={50} />
    },
    {
        id: 4,
        name: "Experience",
        symbol: <FaSuitcase size={50} />
    },
    {
        id: 5,
        name: "Linktree",
        symbol: <FaLink size={50} />
    }
  ])

  // Array for Linktree
  const [linktree, setLinktree] = useState([
    {
        id: 1,
        name: "LinkedIn",
        user: "Yip Zi Xian",
        symbol: <FaLinkedin size={40} />,
        bgColor: "#0A66C2",
    },
    {
        id: 2,
        name: "GitHub",
        user: "NightfuryEquinn",
        symbol: <FaGithub size={40} />,
        bgColor: "#0A1000",
    },
    {
        id: 3,
        name: "Mail",
        user: "xianzyip8@gmail.com",
        symbol: <FaEnvelope size={40} />,
        bgColor: "#DA0000",
    },
    {
        id: 4,
        name: "Instagram",
        user: "nightfury_equinn",
        symbol: <FaInstagram size={40} />,
        bgColor: "#FF4169",
    },
    {
        id: 5,
        name: "Discord",
        user: "Nightfury#8826",
        symbol: <FaDiscord size={40} />,
        bgColor: "#4A72FF",
    }
  ])

  return (
    <>
      <Canvas />
      <Music />
      <Bars />
      <Contentlogo />
      {/* <Intro /> */}
      {/* <Mainmenu menuSelection={menuSelection} /> */}
      {/* <Sidemenu menuSelection={menuSelection}/> */}
      {/* <Aboutmepage /> */}
      {/* <Skillpage /> */}
      {/* <Projectpage /> */}
      {/* <Experiencepage /> */}
      {/* <Linktree linktree={linktree}/> */}
      <Constellation />
    </>
  )
}

export default Main;
