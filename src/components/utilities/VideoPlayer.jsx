"use client"

import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId, anime }) => {
  const options = {
    width: '400',
    height: '350'
  }

  return (
    <div className="bg-warne-secondary flex sm:items-start items-center sm:flex-row flex-col-reverse overflow-x-auto">
        <YouTube 
            videoId={youtubeId}
            onReady={(e) => e.target.pauseVideo()}
            opts={options}
        />
        <div className="flex flex-col">
            <h3 className="p-4 text-2xl font-semibold sm:text-left text-center">{anime.data.title} - {anime.data.year || '1945'}</h3>
            <div className="flex flex-wrap justify-center w-full gap-3 p-4 overflow-x-auto">
                <div className="rounded-md border border-warne-accent p-2 w-32 h-16 flex flex-col justify-center items-center gap-2">
                    <h3 className="text-lg font-medium">SKOR</h3>
                    <p className="text-base text-warne-accent">{anime.data.score}</p>
                </div>
                <div className="rounded-md border border-warne-accent p-2 w-32 h-16 flex flex-col justify-center items-center gap-2">
                    <h3 className="text-lg font-medium">DURASI</h3>
                    <p className="text-base text-warne-accent">{anime.data.duration}</p>
                </div>
                <div className="rounded-md border border-warne-accent p-2 w-32 h-16 flex flex-col justify-center items-center gap-2">
                    <h3 className="text-lg font-medium">EPISODES</h3>
                    <p className="text-base text-warne-accent">{anime.data.episodes}</p>
                </div>
                <div className="rounded-md border border-warne-accent p-2 w-32 h-16 flex flex-col justify-center items-center gap-2">
                    <h3 className="text-lg font-medium">RANK</h3>
                    <p className="text-base text-warne-accent">{anime.data.rank}</p>
                </div>
                <div className="rounded-md border border-warne-accent p-2 w-32 h-16 flex flex-col justify-center items-center gap-2">
                    <h3 className="text-lg font-medium">ANGGOTA</h3>
                    <p className="text-base text-warne-accent">{anime.data.members}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoPlayer