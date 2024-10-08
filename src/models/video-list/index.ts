export interface IVideoResult {
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

export type VideoListResponse = IVideoResult[]
