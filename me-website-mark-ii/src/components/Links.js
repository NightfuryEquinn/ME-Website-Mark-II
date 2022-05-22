const Links = ({ name, user, symbol, bgColor }) => {
  return (
    <>
        <div className="mt-5 mx-14 flex flex-col content-center justify-center relative cursor-pointer">
            <div style={{background: bgColor}} className="m-5 p-5 h-20 w-72 flex content-center justify-center rounded-xl text-white">
                {symbol}
            </div>
            <div className="mb-5 mx-5 flex flex-col content-center justify-center">
                <h1 className="text-white font-semibold tracking-wider font-orbit text-2xl">{name}</h1>
                <p className="text-textwhite font-semibold tracking-wider font-orbit text-base">{user}</p>
            </div>
        </div>
    </>
  )
}

export default Links