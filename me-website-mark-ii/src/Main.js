import Canvas from './components/Canvas'
import Intro from './components/Intro'

const Main = () => 
{
  return (
    <>
      <div className="m-0 p-0 overflow-hidden bg-backblue"> 
        <Canvas />
      </div>
      <Intro />
    </>
  )
}

export default Main;
