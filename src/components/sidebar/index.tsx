'use client'
import { SidebarLinkItem } from '@/models/sidebar-links/sidebar-link.model'
import { SidebarLink } from './sidebar-link'
import { memo, useState } from 'react'

import clsx from 'clsx'
import { CloseSidebarButton } from './close-sidebar-button'

interface SidebarComponentProps {
	linkList: SidebarLinkItem[]
}

export const SidebarComponent = memo(function SidebarComponent({
	linkList,
}: SidebarComponentProps) {
	// TODO: This should be moved to state management likes Redux or Jotai
	const [isOpened, setIsOpened] = useState(false)
	return (
		<aside
			className={clsx('p-2 transition-all', {
				'w-52': isOpened,
				'w-10': !isOpened,
			})}
		>
			<CloseSidebarButton isOpened={isOpened} setIsOpened={setIsOpened} />
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
})
