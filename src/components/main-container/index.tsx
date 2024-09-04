import React, { ReactNode } from 'react'

interface IMainContainerComponentProps {
	children: ReactNode
}
export default function MainContainerComponent({
	children,
}: IMainContainerComponentProps) {
	return (
		<main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-gray-950">
			{children}
		</main>
	)
}
