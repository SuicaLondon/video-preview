import React, { memo, RefObject, useCallback, useState } from 'react'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import { twMerge } from 'tailwind-merge'

interface IVideoMuteButtonComponentProps {
	videoRef: RefObject<HTMLVideoElement>
	className: string
}

export const VideoMuteButtonComponent = memo(function VideoMuteButtonComponent({
	videoRef,
	className,
}: IVideoMuteButtonComponentProps) {
	const [isMuted, setIsMuted] = useState(true)
	const handleMute = () => {
		if (videoRef.current) {
			if (isMuted) {
				videoRef.current.muted = false
				setIsMuted(false)
			} else {
				videoRef.current.muted = true
				setIsMuted(true)
			}
		}
	}
	return (
		<button
			className={twMerge(
				'rounded-full bg-gray-300 p-2 dark:bg-gray-700',
				className,
			)}
			onClick={handleMute}
		>
			{isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
		</button>
	)
})
