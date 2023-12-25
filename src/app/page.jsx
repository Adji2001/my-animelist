import { getAnimeApi } from "@/api/anime-api"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async () => {

  const topAnime = await getAnimeApi("top/anime", `limit=${8}`)

  return (
    <>
      <section>
        <Header title='Paling Populer' linkHref='/populer' linkTitle='Lihat Semua' />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title='Paling Baru' linkHref='/populer' linkTitle='Lihat Babiii' />
        <AnimeList api={topAnime} />
      </section>
    </>
  )
}

export default Page