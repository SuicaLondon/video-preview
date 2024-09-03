import { SidebarComponent } from '@/components/sidebar'
import { SIDEBAR_LINK_LIST } from '@/constants/sidebar-link-constants'

export default function Sidebar() {
	return <SidebarComponent linkList={SIDEBAR_LINK_LIST} />
}
