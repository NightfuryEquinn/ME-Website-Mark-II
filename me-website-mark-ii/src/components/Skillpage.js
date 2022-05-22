import Arrows from "./Arrows"
import Skilltitle from './Skilltitle'
import Skilltext from './Skilltext'
import Skillflip from './Skillflip'
import Skillimage from './Skillimage'

const Skillpage = () => {
  return (
    <>
      <div>
        <div className="h-screen flex flex-row content-center justify-between items-center">
          <Arrows />
          <div className="mt-20 mb-10 mx-10 flex flex-col content-center justify-center">
            <Skilltitle />
            <Skilltext /> 
            <Skillflip />
          </div>
          <Skillimage />
        </div>
      </div>
    </>
  )
}

export default Skillpage