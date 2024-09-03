import { fetchVideos } from '@/clients/video'
import { VideoListResponse } from '@/models/video-list'
import { QueryClient, usePrefetchQuery } from '@tanstack/react-query'

export const prefetchVideoListQuery = async () => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery<VideoListResponse>({
		queryKey: ['fetch-videos'],
		queryFn: fetchVideos,
	})
	return queryClient
}
