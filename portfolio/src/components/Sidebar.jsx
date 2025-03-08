import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "./home/Header"
import About from "./home/About"

const Sidebar = () => {
    const [open, setOpen] = useState(true)
    const[page, setPage] = useState(<Header />)
    const panels = [
        {
            name: "Home",
            img: "",
            link: <Header />,
            bgColor: 'bg-blue-200',
        },
        {
            name: "Projects",
            img: "",
            link: <About />,
            bgColor: 'bg-red-400',

        },
        {
            name: "Skills",
            img: "",
            link: '/skills',
            bgColor: "bg-green-400",
        },
        {
            name: "Resume",
            img: "",
            link: '/resume',
            bgColor: "bg-slate-400",
        },
    ]

    return(
        <div className="flex">
            <div className={`${open ? "w-2/12" : "w-20"} duration-300 h-screen bg-gray-400 relative`}>
                <img src='' alt='' onClick={() => setOpen(!open)}
                    className={`${!open && "rotate-180"} absolute cursor-pointer -right-3 top-9 w-7 border-2 border-black rounded-full`}    
                />
                <ul className="h-full">
                    {
                        panels.map((panel, index) => (
                            <li key={index} 
                                onClick={() => setPage(panel.link)}
                                className={`h-1/4 text-black text-sm text-center ${panel.bgColor} cursor-pointer p-2 hover:text-white flex items-center justify-center`}>
                                <div className="">
                                    <img src='' alt=''/>
                                    {/* img is react icon */}
                                    <span className={`${!open && 'hidden'}`}>{panel.name}</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="w-full">
                {page}
            </div>
        </div>
    )
}

export default Sidebar