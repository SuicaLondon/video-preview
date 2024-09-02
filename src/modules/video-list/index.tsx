'use client'
import { VideoPreviewComponent } from '@/components/video-preview'
import { useFetchVideoListQuery } from '@/hooks/use-fetch-video-list-query'
import React from 'react'

export function GameList() {
	const { data: videoList, error, isLoading } = useFetchVideoListQuery()
	return (
		<div className="flex w-full flex-row flex-wrap items-center gap-x-1 gap-y-4">
			{videoList?.map((video, index) => {
				return (
					<VideoPreviewComponent
						key={index}
						title={video.title}
						author={video.author}
						views={video.views}
						isOdd={index % 2 !== 0}
					/>
				)
			})}
		</div>
	)
}
