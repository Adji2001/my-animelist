"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
    const [search, setSearch] = useState('')
    const router = useRouter()

    const searchHandler = (e) => {
        if (!search) return;
        
        if (e.key === 'Enter' || e.type === 'click') {
            e.preventDefault()
    
            router.push(`/search/${search}`)
        }
    }

    return (
        <div className="relative">
            <input 
                type="text" 
                placeholder="Cari nama anime ..." 
                className="w-full p-2 outline-none rounded-md"
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={searchHandler}
            />
            <button className="absolute top-2 end-2" onClick={searchHandler}>
                <CiSearch className="text-2xl font-black" />
            </button>
        </div>
    )
}

export default SearchInput