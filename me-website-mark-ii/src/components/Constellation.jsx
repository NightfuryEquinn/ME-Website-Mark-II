import Arrows from './Arrows'
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaDiscord } from 'react-icons/fa'

const Constellation = () => {
  return (
    <>
        <div className='h-screen flex flex-row content-center justify-between'>
            <Arrows />
            <div className="text-white">
                <div className='flex flex-row content-center justify-center items-center absolute translate-x-[-1350px] translate-y-[200px] z-10'>
                    <div className='m-5 p-5 h-20 w-20 bg-[#0A66C2] rounded-xl'>
                        <FaLinkedin size={40} />
                    </div>
                    <div className='m-5 p-5 flex flex-col content-start justify-start'>
                        <h1 className='text-white font-semibold tracking-wider font-orbit text-2xl'>LinkedIn</h1>
                        <p className='text-textwhite font-semibold tracking-wider font-orbit text-base'>Yip Zi Xian</p>
                    </div>
                    
                </div>

                <svg className='absolute translate-x-[-1300px] translate-y-[300px]'><line x1={0} y1={0} x2={140} y2={140} stroke="#b3c3d4" strokeWidth={3} /></svg>
                
                <div className='flex flex-row content-center justify-center items-center absolute translate-x-[-1250px] translate-y-[400px] z-10'>
                    <div className='m-5 p-5 h-20 w-20 bg-[#0A1000] rounded-xl'>
                        <FaGithub size={40} />
                    </div>
                    <div className='m-5 p-5 flex flex-col content-start justify-start'>
                        <h1 className='text-white font-semibold tracking-wider font-orbit text-2xl'>GitHub</h1>
                        <p className='text-textwhite font-semibold tracking-wider font-orbit text-base'>NightfuryEquinn</p>
                    </div>
                </div>

                <svg className='absolute translate-x-[-1150px] translate-y-[300px]'><line x1={240} y1={0} x2={0} y2={140} stroke="#b3c3d4" strokeWidth={3} /></svg>

                <div className='flex flex-row content-center justify-center items-center absolute translate-x-[-950px] translate-y-[250px] z-10'>
                    <div className='m-5 p-5 h-20 w-20 bg-[#DA0000] rounded-xl'>
                        <FaEnvelope size={40} />
                    </div>
                    <div className='m-5 p-5 flex flex-col content-start justify-start'>
                        <h1 className='text-white font-semibold tracking-wider font-orbit text-2xl'>Mail</h1>
                        <p className='text-textwhite font-semibold tracking-wider font-orbit text-base'>xianzyip8@gmail.com</p>
                    </div>
                </div>

                <svg className='absolute translate-x-[-850px] translate-y-[150px]'><line x1={550} y1={0} x2={0} y2={140} stroke="#b3c3d4" strokeWidth={3} /></svg>

                <div className='flex flex-row content-center justify-center items-center absolute translate-x-[-575px] translate-y-[150px] z-10'>
                    <div className='m-5 p-5 h-20 w-20 bg-[#FF4169] rounded-xl'>
                        <FaInstagram size={40} />
                    </div>
                    <div className='m-5 p-5 flex flex-col content-start justify-start'>
                        <h1 className='text-white font-semibold tracking-wider font-orbit text-2xl'>Instagram</h1>
                        <p className='text-textwhite font-semibold tracking-wider font-orbit text-base'>nightfury_equinn</p>
                    </div>
                </div>

                <svg className='absolute translate-x-[-475px] translate-y-[250px]'><line x1={0} y1={0} x2={140} y2={140} stroke="#b3c3d4" strokeWidth={3} /></svg>

                <div className='flex flex-row content-center justify-center items-center absolute translate-x-[-400px] translate-y-[300px] z-10'>
                    <div className='m-5 p-5 h-20 w-20 bg-[#4A72FF] rounded-xl'>
                        <FaDiscord size={40} />
                    </div>
                    <div className='m-5 p-5 flex flex-col content-start justify-start'>
                        <h1 className='text-white font-semibold tracking-wider font-orbit text-2xl'>Discord</h1>
                        <p className='text-textwhite font-semibold tracking-wider font-orbit text-base'>Nightfury#8826</p>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Constellation