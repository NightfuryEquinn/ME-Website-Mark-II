import Boxselection from './Boxselection'
import Close from './Close'

const Sidemenu = ({ menuSelection }) => {
  return (
    <>
        <div className='mx-10 h-screen relative'>
            <Close />
            <div className='h-screen flex flex-row flex-wrap content-center justify-end'>
                {menuSelection.map((selection) => (
                    <Boxselection selection={selection} key={selection.id}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default Sidemenu