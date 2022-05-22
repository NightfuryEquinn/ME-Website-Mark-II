import Arrows from "./Arrows"
import Projecttitle from './Projecttitle'
import Projecttext from './Projecttext'
import Projectflip from './Projectflip'
import Projectimage from './Projectimage'

const Projectpage = () => {
  return (
    <>
      <div>
        <div className="h-screen flex flex-row content-center justify-between items-center">
          <Arrows />
          <div className="mt-20 mb-10 mx-10 flex flex-col content-center justify-center">
            <Projecttitle />
            <Projecttext /> 
            <Projectflip />
          </div>
          <Projectimage />
        </div>
      </div>
    </>
  )
}

export default Projectpage