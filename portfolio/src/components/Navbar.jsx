import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { LuChevronsLeftRight } from "react-icons/lu";

const Navbar = () => {

    return(
        <nav className="flex items-center justify-around gap-80 w-full sticky top-0 left-0 my-4">
            <div>
                <LuChevronsLeftRight />
            </div>
            <div className="flex gap-20 items-center justify-center text-xl">
                <Link to='/' className="underline decoration-solid text-2xl px-4 py-1 rounded-lg">Resume</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Projects</Link>
            </div>
        </nav>
    )
}

export default Navbar