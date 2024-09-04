import { IVideoResult } from '@/models/video-list'
import { error } from 'console'
import Image from 'next/image'
import React, { memo } from 'react'

interface IThumbnailComponentProps
	extends Pick<IVideoResult, 'thumbnailUrl' | 'title'> {}

export const ThumbnailComponent = memo(function ThumbnailComponent({
	thumbnailUrl,
	title,
}: IThumbnailComponentProps) {
	/// The reason why it is using Image component from Next.js is because it is not
	/// efficient to generate the image in different resolution for different devices.
	/// The image should be process when it was uploaded from the CMS, and processed
	/// by MQ.
	return (
		<img
			src={thumbnailUrl}
			alt={`The thumbnail of the Video ${title}`}
			className="h-full w-full object-cover"
		/>
	)
})
