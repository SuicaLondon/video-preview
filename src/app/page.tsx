import { VideoPreviewComponent } from '@/components/video-preview'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-white p-24 dark:bg-gray-950">
			Hello World
			<div className="flex w-full flex-row flex-wrap items-center gap-x-1 gap-y-4">
				{new Array(5).fill(null).map((item, index) => {
					return <VideoPreviewComponent key={index} isOdd={index % 2 !== 0} />
				})}
			</div>
		</main>
	)
}
