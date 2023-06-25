'use client'

import ChannelCard from "./channelCard"
import VideoCard from "./videoCard"
import Loading from "./loading"

const Videos = ({ data }) => {
    if (data.length == 0) return <Loading />

    return (
        <div className="flex gap-3 flex-wrap justify-center mt-7">
            {data.map((e, idx) => (
                <>
                    {e.id.channelId && <ChannelCard data={e} key={idx} />}
                    {e.id.videoId && <VideoCard data={e} key={idx + 1} />}
                </>
            ))}
        </div>
    )
}

export default Videos