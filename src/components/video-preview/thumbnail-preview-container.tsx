'use client'
import { VideoResult } from '@/models/video-list'
import { useRef, useState } from 'react'
import { VideoMode, VideoModeEnum, VideoModeProps } from './index.type'
import { PreviewComponent } from './preview'
import { ThumbnailComponent } from './thumbnail'

type ThumbnailPreviewContainerProps = Pick<
	VideoResult,
	'thumbnailUrl' | 'videoUrl' | 'title' | 'duration'
> &
	VideoModeProps

export function ThumbnailPreviewContainerComponent({
	thumbnailUrl,
	videoUrl,
	title,
	duration,
	mode,
	...props
}: ThumbnailPreviewContainerProps) {
	const timerRef = useRef<NodeJS.Timeout | null>(null)
	const [isPlaying, setIsPlaying] = useState(false)

	const handleMouseEnter = () => {
		if (mode === VideoMode.interactive) {
			timerRef.current = setTimeout(() => {
				setIsPlaying(true)
				timerRef.current = null
			}, 500)
		}
	}

	const handleMouseLeave = () => {
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
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<PreviewComponent
				isPlaying={isPlaying}
				videoUrl={videoUrl}
				title={title}
				duration={duration}
				{...props}
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
