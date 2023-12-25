import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
  return (
    <div className="h-max grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data?.map((anime) => (
        <div key={anime.mal_id} className="shadow-xl bg-warne-secondary">
          <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-warne-primary hover:text-warne-accent transition-all">
              <Image src={anime.images.webp.image_url} alt="image" width={350} height={350} className="w-full max-h-72 object-cover" />
              <h3 className="font-bold md:text-xl text-md p-3">{anime.title}</h3>
          </Link>
        </div>
     
      ))}
    </div>
  )
}

export default AnimeList