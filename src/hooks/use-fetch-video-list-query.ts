import { fetchVideos } from '@/clients/video'
import { VideoListResponse } from '@/models/video-list'
import { useQuery } from '@tanstack/react-query'

export const useFetchVideoListQuery = () => {
	const { data, error, isLoading } = useQuery<VideoListResponse>({
		queryKey: ['fetch-videos'],
		queryFn: fetchVideos,
	})

	return { data, error, isLoading }
}
