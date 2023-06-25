import getCurrentUser from "../actions/getCurrentUser"
import SavedVideosData from "../components/savedVideosData";
import SignInBtn from "../components/signInBtn";

export const metadata = {
    title: 'savedVideos',
}


const SavedVideos = async () => {
    const user = await getCurrentUser();
    if (!user?.id) return (
        <div className="flex flex-col gap-2 h-[95vh] justify-center items-center">
            <p className="text-lg ">you need to sign in first</p>
            <SignInBtn />
        </div>
    )

    return (
        <SavedVideosData />
    )
}

export default SavedVideos