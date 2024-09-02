'use client'
import { SidebarLinkItem } from '@/models/sidebar-links/sidebar-link.model'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface SidebarLinkProps extends SidebarLinkItem {
	isOpened: boolean
}
export function SidebarLink({ href, name, icon, isOpened }: SidebarLinkProps) {
	const pathname = usePathname()
	return (
		<li>
			<Link
				className={clsx('hover:bg-gray-700 dark:hover:bg-gray-300', {
					underline: pathname != href,
				})}
				href="/videos"
			>
				{isOpened ? `${icon} ${name}` : icon}
			</Link>
		</li>
	)
}
