import React from 'react'
import { useQuery } from '@tanstack/react-query'

const fetchVideos = async () => {
	const response = await fetch(
		'https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json',
	)
	if (!response.ok) {
		throw new Error('Cannot fetch the video list')
	}
	return response.json()
}

export const useFetchVideoListQuery = () => {
	const { data, error, isLoading } = useQuery<VideoListResponse>({
		queryKey: ['fetch-videos'],
		queryFn: fetchVideos,
	})

	return { data, error, isLoading }
}
