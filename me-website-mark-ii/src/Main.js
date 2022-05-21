import { useState } from 'react'; 
import { FaLink, FaInfoCircle, FaChartBar, FaProjectDiagram, FaSuitcase } from 'react-icons/fa'

import Canvas from './components/Canvas'
import Contentpage from './components/Contentpage';
import Intro from './components/Intro'
import Mainmenu from './components/Mainmenu';
import Music from './components/Music';
import Sidemenu from './components/Sidemenu';

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

  return (
    <>
      <Canvas />
      {/* <Music /> */}
      {/* <Intro /> */}
      {/* <Mainmenu menuSelection={menuSelection} /> */}
      {/* <Sidemenu menuSelection={menuSelection}/> */}
      <Contentpage />
    </>
  )
}

export default Main;
