import React, { memo } from 'react'
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar'
import CloseIcon from '@mui/icons-material/Close'
interface ICloseSidebarButtonProps {
	isOpened: boolean
	setIsOpened: (isOpened: boolean) => void
}

export const CloseSidebarButton = memo(function CloseSidebarButton({
	isOpened,
	setIsOpened,
}: ICloseSidebarButtonProps) {
	return (
		<button onClick={() => setIsOpened(!isOpened)}>
			{isOpened ? <CloseIcon /> : <ViewSidebarIcon />}
		</button>
	)
})
