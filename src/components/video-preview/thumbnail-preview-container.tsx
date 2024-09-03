'use client'
import { title } from 'process'
import { ThumbnailComponent } from './thumbnail'
import { useRef, useState } from 'react'
import { PreviewComponent } from './preview'
import { VideoMode, VideoModeEnum, VideoResult } from '@/models/video-list'

interface ThumbnailPreviewContainerProps
	extends Pick<VideoResult, 'thumbnailUrl' | 'videoUrl' | 'title' | 'duration'> {
	mode: VideoModeEnum
}

export function ThumbnailPreviewContainerComponent({
	thumbnailUrl,
	videoUrl,
	title,
	duration,
	mode,
}: ThumbnailPreviewContainerProps) {
	const timerRef = useRef<NodeJS.Timeout | null>(null)
	const [isPlaying, setIsPlaying] = useState(false)

	const handleMouseOver = () => {
		console.log('over')
		if (mode === VideoMode.interactive) {
			timerRef.current = setTimeout(() => {
				setIsPlaying(true)
				timerRef.current = null
			}, 500)
		}
	}

	const handleMouseLeave = () => {
		console.log('out')
		if (mode === VideoMode.interactive) {
			if (timerRef.current) {
				clearTimeout(timerRef.current)
				timerRef.current = null
			}
			setIsPlaying(false)
		}
	}
	return (
		<div
			className="relative h-44 w-full overflow-clip rounded-lg"
			onMouseOver={handleMouseOver}
			onMouseLeave={handleMouseLeave}
		>
			<PreviewComponent
				isPlaying={isPlaying}
				videoUrl={videoUrl}
				title={title}
				duration={duration}
			/>
			{!isPlaying && (
				<div className="absolute left-0 top-0 h-full w-full">
					<ThumbnailComponent title={title} thumbnailUrl={thumbnailUrl} />
				</div>
			)}
			<p className="absolute bottom-2 right-2 z-10 select-none rounded-md bg-slate-700 px-2 py-1 text-white opacity-80">
				{duration}
			</p>
		</div>
	)
}
