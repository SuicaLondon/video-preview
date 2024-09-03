import { GameList } from '@/modules/video-list'

export default function Home() {
	return (
		<main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-gray-950">
			<GameList />
		</main>
	)
}
