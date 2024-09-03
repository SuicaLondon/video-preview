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
	/// This is not the best solution, it have a couple of solution which is better
	/// 1. What Youtube is using is calculating the screen width and decide the max width of each component of video card
	/// 2. Another solution is make larger breakpoints likes xxl: 1920px to flex and set a bigger max-width for video card
	///    For the smaller screen size, remove the max-width to make it flexible, but it do need the redesign of the image
	///    Ratio.
	return (
		<div className="col-span-3 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-wrap xl:items-center">
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
