import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { VideoListResponse } from '@/models/video-list'
import { fetchVideos } from '@/clients/video'

export const useFetchVideoListQuery = () => {
	const { data, error, isLoading } = useQuery<VideoListResponse>({
		queryKey: ['fetch-videos'],
		queryFn: fetchVideos,
	})

	return { data, error, isLoading }
}
