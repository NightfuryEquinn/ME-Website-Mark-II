import { useState } from 'react'; 
import { FaLink, FaInfoCircle, FaChartBar, FaProjectDiagram, FaSuitcase, FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaDiscord } from 'react-icons/fa'

import Canvas from './components/Canvas'

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
    </>
  )
}

export default Main;
