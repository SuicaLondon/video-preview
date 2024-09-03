import MainContainerComponent from '@/components/main-container'
import React from 'react'

export default function NotFound() {
	return (
		<MainContainerComponent>
			<div className="flex flex-1 items-center justify-center text-4xl">
				Not Found | 404
			</div>
		</MainContainerComponent>
	)
}
