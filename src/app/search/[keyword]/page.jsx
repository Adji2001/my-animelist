import { getAnimeApi } from "@/api/anime-api"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async ({ params }) => {

  const {keyword} = params
  const decodedKeyword = decodeURI(keyword)

  const searchAnime = await getAnimeApi("anime", `q=${decodedKeyword}`)

  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${decodedKeyword}...`} linkHref='/populer' linkTitle='Lihat Semua' />
        <AnimeList api={searchAnime} />
      </section>
    </>
  )
}

export default Page