import React, { ReactNode } from 'react'

interface MainContainerComponentProps {
	children: ReactNode
}
export default function MainContainerComponent({
	children,
}: MainContainerComponentProps) {
	return (
		<main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-gray-950">
			{children}
		</main>
	)
}
