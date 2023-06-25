import SearchedVideos from '@/app/components/searchedVideos'
import React from 'react'

export async function generateMetadata({ params: { searchTerm } }) {
    return {
        title: `${searchTerm} videos`,
        description: `searched results for ${searchTerm}`
    }
}
const Video = ({ params: { searchTerm } }) => {
    return (
        <SearchedVideos searchTerm={searchTerm} />
    )
}

export default Video