import React from 'react'

interface VideoTextProps {
	text: string
}

export const VideoTextComponent = function VideoTextComponent({
	text,
}: VideoTextProps) {
	return (
		<p className="max-h-6 text-ellipsis text-gray-700 dark:text-gray-300">
			{text}
		</p>
	)
}
