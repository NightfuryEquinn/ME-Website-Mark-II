const Boxselection = ({ selection }) => {
  return (
    <>
        <div className='m-10 w-1/4 bg-backlightblue flex flex-col content-center justify-center items-center cursor-pointer border-b-textwhite border-b-8 relative'>
            <div className="mx-10 mt-10 mb-5 text-textwhite">
                {selection.symbol}
            </div>
            <p className='mx-10 mb-10 mt-5 font-orbit font-medium text-4xl tracking-wider text-textwhite text-center'>{selection.name}</p>
        </div>
    </>
  )
}

export default Boxselection