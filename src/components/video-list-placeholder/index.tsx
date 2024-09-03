import React, { memo } from 'react'
import { VideoItemPlaceholderComponent } from './video-item-placeholder'

export const VideoListPlaceholderComponent = memo(
	function VideoListPlaceholderComponent() {
		/// The frame of the placeholder should be sync with the video item frame
		/// It is a part that could be refined in the future
		return (
			<div className="col-span-3 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 4xl:grid-cols-7 5xl:flex 5xl:flex-wrap 5xl:items-center 5xl:justify-around">
				{new Array(8).fill(null).map((item, index) => {
					return <VideoItemPlaceholderComponent key={index} />
				})}
			</div>
		)
	},
)
