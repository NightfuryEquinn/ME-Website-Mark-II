import Arrows from "./Arrows"
import Bars from "./Bars"
import Contentlogo from "./Contentlogo"

const Contentpage = () => {
  return (
    <>
        <div>
            <Bars />
            <Contentlogo />
            <div className="">
                <Arrows />
            </div>
        </div>
    </>
  )
}

export default Contentpage