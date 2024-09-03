'use client'
import { VideoListComponent } from '@/components/video-list'
import { VideoListPlaceholderComponent } from '@/components/video-list-placeholder'
import { useFetchVideoListQuery } from '@/hooks/use-fetch-video-list-query'

export default function VideoList() {
	const { data: videoList, error, isLoading } = useFetchVideoListQuery()
	if (isLoading) {
		return <VideoListPlaceholderComponent />
	}
	return <VideoListComponent videoList={videoList ?? []} />
}
