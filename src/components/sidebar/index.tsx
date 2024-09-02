'use client'
import { SidebarLinkItem } from '@/models/sidebar-links/sidebar-link.model'
import { SidebarLink } from './sidebar-link'
import { useState } from 'react'
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar'
import clsx from 'clsx'
import CloseIcon from '@mui/icons-material/Close'
interface SidebarComponentProps {
	linkList: SidebarLinkItem[]
}

export function SidebarComponent({ linkList }: SidebarComponentProps) {
	const [isOpened, setIsOpened] = useState(false)
	return (
		<aside
			className={clsx('p-4 transition-all', {
				'w-52': isOpened,
				'w-10': !isOpened,
			})}
		>
			<button onClick={() => setIsOpened(!isOpened)}>
				{isOpened ? <CloseIcon /> : <ViewSidebarIcon />}
			</button>
			<ul>
				{linkList.map((link) => {
					return (
						<SidebarLink
							id={link.id}
							key={link.id}
							icon={link.icon}
							href={link.href}
							name={link.name}
							isOpened={isOpened}
						/>
					)
				})}
			</ul>
		</aside>
	)
}
