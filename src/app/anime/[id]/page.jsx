import { getAnimeApi } from "@/api/anime-api"
import VideoPlayer from "@/components/utilities/VideoPlayer"
import Image from "next/image"

const Page = async ({ params: {id} }) => {
  const anime = await getAnimeApi(`anime/${id}`)
  console.log(anime)

  return (
    <div className='p-4 text-warne-primary'>
        
        
        
        <div className="relative">
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id} anime={anime}/>
        </div>
        <div className="mt-5 flex sm:flex-nowrap flex-wrap gap-4">
            <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} width={350} height={350} className="w-full rounded object-cover" />
            <p className="text-lg">{anime.data.synopsis}</p>
        </div>
    </div>
  )
}

export default Page