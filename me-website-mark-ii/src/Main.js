import Canvas from './components/Canvas'
import Intro from './components/Intro'
import Mainmenu from './components/Mainmenu';
import Music from './components/Music';

const Main = () => 
{
  return (
    <>
      <Canvas />
      <Music />
      {/* <Intro /> */}
      <Mainmenu />
    </>
  )
}

export default Main;
