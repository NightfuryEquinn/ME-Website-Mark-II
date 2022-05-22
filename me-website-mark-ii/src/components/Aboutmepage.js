import Arrows from "./Arrows"
import Aboutmetext from "./Aboutmetext"
import Aboutmetitle from "./Aboutmetitle"
import Aboutmeflip from "./Aboutmeflip"
import Aboutmeimage from "./Aboutmeimage"

const Aboutmepage = () => {
  return (
    <>
      <div>
        <div className="h-screen flex flex-row content-center justify-between items-center">
          <Arrows />
          <div className="mt-20 mb-10 mx-10 flex flex-col content-center justify-center">
            <Aboutmetitle />
            <Aboutmetext /> 
            <Aboutmeflip />
          </div>
          <Aboutmeimage />
        </div>
      </div>
    </>
  )
}

export default Aboutmepage