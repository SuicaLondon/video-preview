import React, { memo } from 'react'
import { VideoItemPlaceholderComponent } from './video-item-placeholder'

export const VideoListPlaceholderComponent = memo(
	function VideoListPlaceholderComponent() {
		/// The frame of the placeholder should be sync with the video item frame
		/// It is a part that could be refined in the future
		return (
			<div className="col-span-3 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-wrap xl:items-center">
				{new Array(8).fill(null).map((item, index) => {
					return <VideoItemPlaceholderComponent key={index} />
				})}
			</div>
		)
	},
)
