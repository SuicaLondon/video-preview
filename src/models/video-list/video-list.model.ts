interface VideoResult {
	id: string
	title: string
	thumbnailUrl: string
	duration: string
	uploadTime: string
	views: string
	author: string
	videoUrl: string
	description: string
	subscriber: string
	isLive: string
}

type VideoListResponse = VideoResult[]
