import ChannelDetailsData from '@/app/components/channelDetailsData'
import React from 'react'

export const metadata = {
    title: 'channelDetails',
}

const ChannelDetails = ({ params: { id } }) => {
    return (
        <div>
            <ChannelDetailsData id={id} />
        </div>
    )
}

export default ChannelDetails