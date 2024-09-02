import React, { memo, useRef, useState } from 'react'

interface PreviewComponentProps
	extends Pick<VideoResult, 'videoUrl' | 'title'> {}

export const PreviewComponent = memo(function PreviewComponent({
	videoUrl,
	title,
}: PreviewComponentProps) {
	const videoRef = useRef<HTMLVideoElement>(null)
	const [isMuted, setIsMuted] = useState(false)
	const [isPlaying, setIsPlaying] = useState(false)

	// const handleMouseOver = () => {
	//   if (mode === 'interactive') {
	//     setTimeout(() => {
	//       videoRef.current?.play();
	//       setIsPlaying(true);
	//     }, 500); // 0.5 seconds delay
	//   }
	// };

	// const handleMouseOut = () => {
	//   if (mode === 'interactive') {
	//     videoRef.current?.pause();
	//     setIsPlaying(false);
	//   }
	// };
	return (
		<video
			ref={videoRef}
			src={videoUrl}
			aria-label={`The preview video of ${title}`}
			muted={isMuted}
		/>
	)
})
