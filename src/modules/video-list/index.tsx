'use client'
import { VideoListComponent } from '@/components/video-list'
import { VideoListPlaceholder } from '@/components/video-list-placeholder'
import { VideoPreviewComponent } from '@/components/video-preview'
import { useFetchVideoListQuery } from '@/hooks/use-fetch-video-list-query'
import React from 'react'

export function GameList() {
	const { data: videoList, error, isLoading } = useFetchVideoListQuery()
	if (isLoading) {
		return <VideoListPlaceholder />
	}
	return <VideoListComponent videoList={videoList ?? []} />
}
