import React from 'react'

interface VideoTextProps {
	text: string
}

export const VideoTextComponent = function VideoTextComponent({
	text,
}: VideoTextProps) {
	return <p>{text}</p>
}
