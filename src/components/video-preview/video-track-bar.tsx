import React, {
	memo,
	MouseEvent,
	RefObject,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'
import { twMerge } from 'tailwind-merge'

interface IVideoTrackBarComponentProps {
	videoRef: RefObject<HTMLVideoElement>
	className: string
	currentTime: number
	onVideoProgressChanged: (time: number) => void
}
export const VideoTrackBarComponent = memo(function VideoTrackBarComponent({
	videoRef,
	className,
	currentTime,
	onVideoProgressChanged,
}: IVideoTrackBarComponentProps) {
	const handleTrackBarChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (videoRef.current) {
			const newTime = parseFloat(event.target.value)
			videoRef.current.currentTime = newTime
			onVideoProgressChanged(newTime)
		}
	}

	return (
		<input
			type="range"
			min="0"
			max={videoRef.current?.duration}
			value={currentTime}
			onChange={handleTrackBarChanged}
			className={twMerge('h-2 w-full cursor-pointer', className)}
		/>
	)
})
