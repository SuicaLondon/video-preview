import React from 'react'
import RotateLeftIcon from '@mui/icons-material/RotateLeft'

export default function Loading() {
	return (
		<div className="flex flex-1 items-center justify-center">
			<RotateLeftIcon className="h-28 w-28 animate-spin" />
		</div>
	)
}
