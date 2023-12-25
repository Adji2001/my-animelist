"use client"

import { getAnimeApi } from "@/api/anime-api"
import AnimeList from "@/components/AnimeList"
import HeaderMenu from "@/components/utilities/HeaderMenu"
import Pagination from "@/components/utilities/Pagination"
import { useEffect, useState } from "react"

const Page = () => {

  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async () => {
    const populerAnime = await getAnimeApi("top/anime", `page=${page}`)
    setTopAnime(populerAnime)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <div>
        <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
        <AnimeList api={topAnime} />
        <Pagination 
          page={page} 
          setPage={setPage} 
          lastPage={topAnime.pagination?.last_visible_page} 
        />
    </div>
  )
}

export default Page