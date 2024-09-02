import React from 'react'

interface VideoTextProps {
	text: string
}

export default function VideoText({ text }: VideoTextProps) {
	return <p>{text}</p>
}
