import React, { memo } from 'react'

interface VideoTitleProps {
	title: string
}

export const VideoTitle = memo(function VideoTitle({ title }: VideoTitleProps) {
	return <h3 className="text-xl font-bold">{title}</h3>
})
