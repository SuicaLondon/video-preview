import React, { memo } from 'react'

interface VideoTitleProps {
	title: string
}

export const VideoTitleComponent = memo(function VideoTitleComponent({
	title,
}: VideoTitleProps) {
	return <h3 className="text-ellipsis text-xl font-bold">{title}</h3>
})
