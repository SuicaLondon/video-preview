import { VideoResult } from '@/models/video-list'
import { error } from 'console'
import Image from 'next/image'
import React, { memo } from 'react'

interface ThumbnailComponentProps
	extends Pick<VideoResult, 'thumbnailUrl' | 'title'> {}

export const ThumbnailComponent = memo(function ThumbnailComponent({
	thumbnailUrl,
	title,
}: ThumbnailComponentProps) {
	/// The reason why it is using Image component from Next.js is because it is not
	/// efficient to generate the image in different resolution for different devices.
	/// The image should be process when it was uploaded from the CMS, and processed
	/// by MQ.
	return (
		<img
			src={thumbnailUrl}
			width={999}
			height={999}
			alt={`The thumbnail of the Video ${title}`}
			className="h-full w-full object-cover"
		/>
	)
})
