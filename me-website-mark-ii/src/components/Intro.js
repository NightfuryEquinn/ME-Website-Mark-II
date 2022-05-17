import Introclick from "./Introclick"
import Introcredits from "./Introcredits"
import Introdes from "./Introdes"
import Intrologo from "./Intrologo"

const Intro = () => {
  return (
    <>
        <div className="h-screen flex flex-col content-center justify-center relative">
            <Intrologo />
            <Introdes />
            <Introclick />
            <Introcredits />
        </div>
    </>
  )
}

export default Intro