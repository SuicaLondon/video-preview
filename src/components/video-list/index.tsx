import { VideoListResponse } from '@/models/video-list'
import { memo } from 'react'
import { VideoPreviewComponent } from '../video-preview'
import { VideoMode } from '../video-preview/index.type'
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
						id={video.id}
						thumbnailUrl={video.thumbnailUrl}
						duration={video.duration}
						uploadTime={video.uploadTime}
						videoUrl={video.videoUrl}
						/// It will throw error if the callback function was set while the mode is static
						mode={VideoMode.interactive}
						// mode={ VideoMode.static}
						onVideoStart={(videoTarget) => console.log('onVideoStart: ')}
						onVideoEnd={(videoTarget) => console.log('onVideoEnd: ')}
						onVideoResume={(videoTarget, time) =>
							console.log('onVideoResume: ', time)
						}
						onVideoSeek={(videoTarget, time) => console.log('onVideoSeek: ', time)}
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
