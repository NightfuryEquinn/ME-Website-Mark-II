import { FaBars } from 'react-icons/fa'

const Bars = () => {
  return (
    <div className='m-10 p-2 left-0 top-0 h-auto w-auto text-textwhite flex content-center justify-center items-center fixed cursor-pointer z-10'>
      <FaBars size={30} />
    </div>
  )
}

export default Bars