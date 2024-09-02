'use client'
import { VideoListComponent } from '@/components/video-list'
import { VideoPreviewComponent } from '@/components/video-preview'
import { useFetchVideoListQuery } from '@/hooks/use-fetch-video-list-query'
import React from 'react'

export function GameList() {
	const { data: videoList, error, isLoading } = useFetchVideoListQuery()
	return <VideoListComponent videoList={videoList ?? []} />
}
