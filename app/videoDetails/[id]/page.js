import VideoDetailsData from "@/app/components/videoDetailsData"

export const metadata = {
    title: 'video',
}

const VideoDetails = ({ params: { id } }) => {
    return (
        <div className="">
            <VideoDetailsData videoId={id} />
        </div>
    )
}

export default VideoDetails