'use client'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { memo } from 'react'
import { twMerge } from 'tailwind-merge'

interface IMoreButtonProps {
	onClick?: () => void
	className?: string
}

export const MoreButtonComponent = memo(function MoreButtonComponent({
	onClick,
	className,
}: IMoreButtonProps) {
	return (
		<button
			className={twMerge('focus-solid-outline', className)}
			onClick={onClick}
		>
			<MoreVertIcon />
		</button>
	)
})
