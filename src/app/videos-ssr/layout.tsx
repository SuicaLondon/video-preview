import MainContainerComponent from '@/components/main-container'

export default function VideoSSRLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <MainContainerComponent>{children}</MainContainerComponent>
}
