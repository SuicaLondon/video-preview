import React, { memo } from 'react'
import { VideoPreviewComponent } from '../video-preview'

export const VideoListComponent = memo(function VideoListComponent() {
	return (
		<div className="flex w-full flex-row flex-wrap items-center gap-x-1 gap-y-4">
			{new Array(5).fill(null).map((item, index) => {
				return <VideoPreviewComponent key={index} isOdd={index % 2 !== 0} />
			})}
		</div>
	)
})
