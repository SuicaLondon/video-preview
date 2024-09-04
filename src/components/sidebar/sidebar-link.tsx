'use client'
import { ISidebarLinkItem } from '@/models/sidebar-links/sidebar-link.model'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface ISidebarLinkProps extends ISidebarLinkItem {
	isOpened: boolean
}
export function SidebarLink({ href, name, icon, isOpened }: ISidebarLinkProps) {
	const pathname = usePathname()
	return (
		<li>
			<Link
				className={clsx(
					'focus-solid-outline hover:bg-gray-700 dark:hover:bg-gray-300',
					{
						underline: pathname != href,
					},
				)}
				href={href}
			>
				{isOpened ? `${icon} ${name}` : icon}
			</Link>
		</li>
	)
}
