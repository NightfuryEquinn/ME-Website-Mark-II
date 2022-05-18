import Menuselection from "./Menuselection"
import Arrows from "./Arrows"

const Mainmenu = () => {
    // Array for Menu Selection
    const menuSelection = [
        {
            id: 1,
            name: "About Us"
        },
        {
            id: 2,
            name: "My Skills"
        },
        {
            id: 3,
            name: "My Projects"
        },
        {
            id: 4,
            name: "My Experience"
        },
        {
            id: 5,
            name: "Linktree"
        }
    ]

    return (
        <>
            <div className="h-screen flex flex-row content-center justify-start items-center relative">
                <Arrows />
                <div className="m-2 flex flex-col">
                    {menuSelection.map((selection) => (
                        <Menuselection selection={selection} key={selection.id} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Mainmenu