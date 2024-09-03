// The reason why it is not using TS enum is to reduce the bundle size
export const VideoMode = {
	interactive: 'interactive',
	static: 'static',
} as const
export type VideoModeEnum = (typeof VideoMode)[keyof typeof VideoMode]

export interface VideoCallback {
	onVideoStart?: (videoTarget: HTMLVideoElement) => void
	onVideoEnd?: (videoTarget: HTMLVideoElement) => void
	onVideoResume?: (videoTarget: HTMLVideoElement, time: number) => void
	onVideoSeek?: (videoTarget: HTMLVideoElement, time: number) => void
}

export type VideoModeProps =
	| ({ mode: (typeof VideoMode)['interactive'] } & VideoCallback)
	| { mode: (typeof VideoMode)['static'] }
