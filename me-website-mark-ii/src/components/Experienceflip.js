import { FaLongArrowAltLeft, FaLongArrowAltRight, FaCircle } from "react-icons/fa"

const Experienceflip = () => {
    // For Loop Circle Icons
    const count = 5
    const circles = []

    for(let i = 0; i < count; i++) {
        circles.push(<FaCircle />)
    }
  return (
    <>
        <div className="mx-10 flex flex-row content-center justify-center items-center relative">
            <FaLongArrowAltLeft className="mx-10 my-2 text-textwhite cursor-pointer" size={40} />
            {circles.map(() => (
                <FaCircle className="mx-2 my-2 text-neonblue cursor-pointer"/>
            ))}
            <FaLongArrowAltRight className="mx-10 my-2 text-textwhite cursor-pointer" size={40} />
        </div>
    </>
  )
}

export default Experienceflip