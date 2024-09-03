'use client'
import { VideoResult } from '@/models/video-list'
import { memo, useEffect, useRef, useState } from 'react'

import { VideoCallback } from './index.type'
import { VideoMuteButtonComponent } from './video-mute-button'
import { VideoTrackBarComponent } from './video-track-bar'
import { useThrottleState } from '@/hooks/use-throttle-state'
import VideoTimeText from './video-time-text'
import { formatSecondsToHHmmss } from '@/utils/format/format-utils'
interface PreviewComponentBasicProps
	extends Pick<VideoResult, 'videoUrl' | 'title' | 'duration'> {
	isPlaying: boolean
}

type PreviewComponentProps = PreviewComponentBasicProps & VideoCallback

export const PreviewComponent = memo(function PreviewComponent({
	videoUrl,
	title,
	isPlaying,
	onVideoStart,
	onVideoEnd,
	onVideoResume,
	onVideoSeek,
}: PreviewComponentProps) {
	/// Video should be loaded lazily, with the IntersectionObserver and call load function manually
	/// The current time and other state could be moved to state management or whatever using useSyncExternalStore
	const videoRef = useRef<HTMLVideoElement>(null)
	const [currentTime, setCurrentTime, setThrottleCurrentTime] = useThrottleState(
		0,
		1000,
	)

	useEffect(() => {
		if (isPlaying) {
			if (!videoRef.current) return
			try {
				videoRef.current.controls = false
				videoRef?.current?.play()
				if (videoRef.current) {
					if (videoRef.current.currentTime === 0) {
						onVideoStart?.(videoRef.current)
					} else {
						onVideoResume?.(videoRef.current, videoRef.current.currentTime)
					}
				}
			} catch (error) {
				// TODO: Log it to Sentry
				console.error(error)
				videoRef.current.muted = false
				videoRef.current.play()
			}
		} else {
			videoRef?.current?.pause()
		}
	}, [isPlaying])

	const handleTimeUpdate = () => {
		if (videoRef.current) {
			setThrottleCurrentTime(videoRef.current.currentTime)
			if (videoRef.current.currentTime >= videoRef.current.duration) {
				onVideoEnd?.(videoRef.current)
			}
		}
	}

	const onVideoProgressChanged = (time: number) => {
		setCurrentTime(time)
		if (videoRef.current) {
			onVideoSeek?.(videoRef.current, time)
		}
	}
	console.log(currentTime, videoRef.current?.duration ?? 0)
	return (
		<div className="relative h-full w-full">
			<video
				className="h-full w-full cursor-pointer object-cover"
				ref={videoRef}
				src={videoUrl}
				aria-label={`The preview video of ${title}`}
				autoPlay={false}
				muted={true}
				controls={false}
				playsInline
				onTimeUpdate={handleTimeUpdate}
				onError={(error) => {
					// TODO: Log in Sentry
					console.error(error)
				}}
			/>
			<VideoMuteButtonComponent
				videoRef={videoRef}
				className={'absolute right-2 top-2'}
			/>
			<VideoTrackBarComponent
				videoRef={videoRef}
				className="absolute bottom-0"
				onVideoProgressChanged={onVideoProgressChanged}
				currentTime={currentTime}
			/>
			{isPlaying && (
				<VideoTimeText
					className="absolute bottom-4 right-2 z-10"
					timeString={`${formatSecondsToHHmmss(currentTime)} / ${formatSecondsToHHmmss(Number.isNaN(videoRef.current?.duration) ? 0 : (videoRef.current?.duration ?? 0))}`}
				/>
			)}
		</div>
	)
})
