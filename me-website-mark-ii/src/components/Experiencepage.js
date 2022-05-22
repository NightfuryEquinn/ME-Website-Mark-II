import Arrows from "./Arrows"
import Experiencetext from "./Experiencetext"
import Experiencetitle from "./Experiencetitle"
import Experienceflip from "./Experienceflip"
import Experienceimage from "./Experienceimage"

const Experiencepage = () => {
  return (
    <>
      <div>
        <div className="h-screen flex flex-row content-center justify-between items-center">
          <Arrows />
          <div className="mt-20 mb-10 mx-10 flex flex-col content-center justify-center">
            <Experiencetitle />
            <Experiencetext /> 
            <Experienceflip />
          </div>
          <Experienceimage />
        </div>
      </div>
    </>
  )
}

export default Experiencepage