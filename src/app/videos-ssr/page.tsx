import { prefetchVideoListQuery } from '@/actions/prefetch-video-list-query'
import VideoList from '@/modules/video-list'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

export default async function VideosSSR() {
	const queryClient = await prefetchVideoListQuery()
	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<VideoList />
		</HydrationBoundary>
	)
}
