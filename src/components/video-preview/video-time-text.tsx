import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface IVideoTimeTextProps {
	timeString: string | number
	className: string
}

export default function VideoTimeText({
	timeString,
	className,
}: IVideoTimeTextProps) {
	return (
		<p
			className={twMerge(
				'select-none rounded-md bg-slate-700 px-2 py-1 text-white opacity-80',
				className,
			)}
		>
			{timeString}
		</p>
	)
}
