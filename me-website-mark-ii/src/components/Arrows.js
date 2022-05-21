import { FaArrowUp, FaArrowDown } from "react-icons/fa"

const Arrows = () => {
  return (
    <>
        <div className="m-5 p-5 flex flex-col content-center justify-center relative">
            <FaArrowUp className="my-7 text-textwhite cursor-pointer" size={40} />
            <FaArrowDown className="my-7 text-textwhite cursor-pointer" size={40} />
        </div>
    </>
  )
}

export default Arrows