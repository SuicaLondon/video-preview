import React, { memo, RefObject, useCallback, useState } from 'react'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'

interface VideoMuteButtonComponentProps {
	videoRef: RefObject<HTMLVideoElement>
	className: string
}

export const VideoMuteButtonComponent = memo(function VideoMuteButtonComponent({
	videoRef,
	className,
}: VideoMuteButtonComponentProps) {
	const [isMuted, setIsMuted] = useState(false)
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
		<button className={className} onClick={handleMute}>
			{isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
		</button>
	)
})
