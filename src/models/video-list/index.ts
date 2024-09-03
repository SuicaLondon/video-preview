export interface VideoResult {
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

export type VideoListResponse = VideoResult[]

// The reason why it is not using TS enum is to reduce the bundle size
export const VideoMode = {
	interactive: 'interactive',
	static: 'static',
}
export type VideoModeEnum = (typeof VideoMode)[keyof typeof VideoMode]
