import Arrows from "./Arrows"
import Links from "./Links"

const Linktree = ({ linktree }) => {
  return (
    <>
        <div>
            <div className="h-screen flex flex-row content-center justify-between items-center">
                <Arrows />
                <div className="flex flex-row flex-wrap content-center justify-start">
                    {linktree.map((link) => (
                        <Links key={link.id} name={link.name} user={link.user} symbol={link.symbol} bgColor={link.bgColor} />
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Linktree