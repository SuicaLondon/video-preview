import MainContainerComponent from '@/components/main-container'
import VideoList from '@/modules/video-list'
import { redirect } from 'next/navigation'

export default function Home() {
	redirect('videos')
}
