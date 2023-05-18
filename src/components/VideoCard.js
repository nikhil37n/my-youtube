import React from 'react';

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
    return (
        <div className="p-2 m-2 w-72 shadow-lg cursor-pointer">
            <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
            <ul>
                <li className="font-bold text-m">{title}</li>
                <li className="text-sm">{channelTitle}</li>
                <li className="text-xs">{statistics.viewCount} Views</li>
            </ul>
        </div>
    )
}

export default VideoCard;