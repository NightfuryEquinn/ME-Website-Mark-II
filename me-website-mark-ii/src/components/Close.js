import { FaTimes } from 'react-icons/fa'

const Close = () => {
  return (
    <>
        <div className='m-5 p-2 left-0 h-auto w-auto text-textwhite flex cotent-center justify-center items-center fixed cursor-pointer z-10'>
            <FaTimes size={50} />
        </div>
    </>
  )
}

export default Close