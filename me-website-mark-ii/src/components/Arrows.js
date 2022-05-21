import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa"

const Arrows = () => {
  return (
    <>
        <div className="m-5 p-5 flex flex-col content-center justify-center relative">
            <FaLongArrowAltUp className="my-10 text-textwhite cursor-pointer" size={50} />
            <FaLongArrowAltDown className="my-10 text-textwhite cursor-pointer" size={50} />
        </div>
    </>
  )
}

export default Arrows