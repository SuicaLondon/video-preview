import React, { memo } from 'react'

export const VideoItemPlaceholderComponent = memo(
	function VideoItemPlaceholderComponent() {
		return (
			<div className="m-3 flex min-h-80 w-full max-w-96 flex-col space-y-4 rounded-xl">
				<div className="dart:bg-gray-300 h-44 bg-gray-700" />
				<div className="flex h-36 space-x-2">
					<div className="dart:bg-gray-300 h-8 w-8 rounded-full bg-gray-700" />
					<div className="flex-1 space-y-1">
						<div className="dart:bg-gray-300 h-7 w-full rounded-xl bg-gray-700"></div>
						<div className="dart:bg-gray-300 h-6 w-full rounded-xl bg-gray-700"></div>
						<div className="dart:bg-gray-300 h-6 w-full rounded-xl bg-gray-700"></div>
					</div>
				</div>
			</div>
		)
	},
)
