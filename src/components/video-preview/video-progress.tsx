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

interface VideoProgressComponentProps {
	videoRef: RefObject<HTMLVideoElement>
	className: string
	currentTime: number
	seCurrentTime: (time: number) => void
}
export const VideoProgressComponent = memo(function VideoProgressComponent({
	videoRef,
	className,
	seCurrentTime,
}: VideoProgressComponentProps) {
	const progressRef = useRef<HTMLProgressElement>(null)

	const handleProgressChange = useCallback(
		(e: MouseEvent<HTMLProgressElement>) => {
			if (videoRef.current && progressRef.current) {
				const rect = progressRef.current.getBoundingClientRect()
				const clickPosition = e.clientX - rect.left
				const clickPercentage = clickPosition / rect.width
				const newTime = clickPercentage * videoRef?.current?.duration
				videoRef.current.currentTime = newTime
				seCurrentTime(newTime)
			}
		},
		[videoRef, progressRef],
	)

	return (
		<progress
			ref={progressRef}
			className={twMerge('h-2 w-full cursor-pointer', className)}
			value={videoRef?.current?.currentTime}
			max={videoRef?.current?.duration}
			onClick={handleProgressChange}
		/>
	)
})
