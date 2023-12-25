import Link from "next/link"
import SearchInput from "./SearchInput"

const Navbar = () => {
    return (
        <header className="bg-warne-accent">
            <div className="flex md:flex-row flex-col justify-between items-center p-3 gap-2">
                <Link href='/' className="font-bold text-white text-2xl">MY ANIMELIST</Link>
                <SearchInput />
            </div>
        </header>
    )
}

export default Navbar