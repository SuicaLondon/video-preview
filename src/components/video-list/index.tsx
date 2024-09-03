import React, { memo } from 'react'
import { VideoPreviewComponent } from '../video-preview'
import { VideoListResponse } from '@/models/video-list'
interface VideoListComponentProps {
	videoList?: VideoListResponse
}

export const VideoListComponent = memo(function VideoListComponent({
	videoList,
}: VideoListComponentProps) {
	return (
		<div className="flex w-full flex-row flex-wrap items-center">
			{videoList?.map((video, index) => {
				return (
					<VideoPreviewComponent
						key={index}
						// {...video} // This is an optional
						id={video.id}
						thumbnailUrl={video.thumbnailUrl}
						duration={video.duration}
						uploadTime={video.uploadTime}
						videoUrl={video.videoUrl}
						description={video.description}
						subscriber={video.subscriber}
						isLive={video.isLive}
						title={video.title}
						author={video.author}
						views={video.views}
						isOdd={index % 2 !== 0}
					/>
				)
			})}
		</div>
	)
})
