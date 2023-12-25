import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="flex justify-between items-center p-4">
            <h1 className="md:text-2xl text-lg font-bold text-warne-primary">{title}</h1>
            <Link href={linkHref} className="md:text-xl sm:text-lg text-sm underline hover:text-warne-accent text-warne-primary transition-all">{linkTitle}</Link>
        </div>
    )
}

export default Header