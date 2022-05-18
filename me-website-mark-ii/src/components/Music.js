import { FaMusic } from 'react-icons/fa'

const Music = () => {
  return (
    <>
        <div className='m-10 p-2 right-0 h-auto w-auto bg-textwhite flex cotent-center justify-center items-center fixed cursor-pointer z-10 ring ring-neonyellow ring-offset-4 ring-offset-backblue'>
            <FaMusic className='text-backblue' size={20}/>
        </div>
    </>
  )
}

export default Music