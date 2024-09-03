'use client'
import { VideoResult } from '@/models/video-list'
import { memo, useEffect, useRef, useState } from 'react'

import { VideoMuteButtonComponent } from './video-mute-button'
import { VideoProgressComponent } from './video-progress'
interface PreviewComponentProps
	extends Pick<VideoResult, 'videoUrl' | 'title' | 'duration'> {
	isPlaying: boolean
}

export const PreviewComponent = memo(function PreviewComponent({
	videoUrl,
	title,
	isPlaying,
}: PreviewComponentProps) {
	const videoRef = useRef<HTMLVideoElement>(null)
	const [currentTime, setCurrentTime] = useState(0)

	useEffect(() => {
		if (isPlaying) {
			videoRef?.current?.play().catch((error) => {
				if (videoRef.current) {
					videoRef.current.muted = false
					videoRef.current.play()
				}
			})
		} else {
			videoRef?.current?.pause()
		}
	}, [isPlaying])

	const handleTimeUpdate = () => {
		if (videoRef.current) {
			setCurrentTime(videoRef.current.currentTime)
		}
	}

	return (
		<div className="relative h-full w-full">
			<video
				className="h-full w-full cursor-pointer object-cover"
				ref={videoRef}
				src={videoUrl}
				aria-label={`The preview video of ${title}`}
				autoPlay={false}
				muted={true}
				onTimeUpdate={handleTimeUpdate}
			/>
			<VideoMuteButtonComponent
				videoRef={videoRef}
				className={'absolute right-2 top-2'}
			/>
			<VideoProgressComponent
				videoRef={videoRef}
				className="absolute bottom-0"
				seCurrentTime={setCurrentTime}
				currentTime={currentTime}
			/>
		</div>
	)
})
