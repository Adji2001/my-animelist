import Link from "next/link"

const Page = () => {
    return (
        <div className="w-full h-[85vh] flex justify-center items-center flex-col gap-4 text-warne-accent font-bold">
            <h1 className="text-4xl">404</h1>
            <h2 className="text-2xl">Lu Tersesat brader</h2>
            <Link href='/' className="text-warne-primary hover:text-warne-accent text-sm underline transition-all">Balek lu kerumah!!!</Link>
        </div>
    )
}

export default Page