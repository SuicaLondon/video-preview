import { SidebarComponent } from '@/components/sidebar'
import { SIDEBAR_LINK_LIST } from '@/constants/sidebar-link-constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Sidebar() {
	return <SidebarComponent linkList={SIDEBAR_LINK_LIST} />
}
