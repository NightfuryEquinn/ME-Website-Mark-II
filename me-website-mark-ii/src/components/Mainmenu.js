import Menuselection from "./Menuselection"
import Arrows from "./Arrows"

const Mainmenu = ({ menuSelection }) => {
    return (
        <>
            <div className="h-screen flex flex-row content-center justify-start items-center">
                <Arrows />
                <div className="m-2 flex flex-col relative">
                    {menuSelection.map((selection) => (
                        <Menuselection selection={selection} key={selection.id} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Mainmenu