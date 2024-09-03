import Link from 'next/link'
import React, { memo } from 'react'

interface VideoTitleProps {
	title: string
	href: string
}

export const VideoTitleComponent = memo(function VideoTitleComponent({
	title,
	href,
}: VideoTitleProps) {
	return (
		<Link
			aria-label={`The title of the video: ${title}`}
			className="focus-solid-outline max-h-14 w-full overflow-clip text-ellipsis text-xl font-bold"
			href={href}
		>
			{title}
		</Link>
	)
})
