import Link from 'next/link'
import React, { memo } from 'react'

interface IUserIconProps {
	username: string
	href: string
}

export const UserAvatarComponent = memo(function UserAvatarComponent({
	username,
	href,
}: IUserIconProps) {
	return (
		<Link
			className="focus-solid-outline flex h-8 w-8 items-center justify-center rounded-full border-transparent bg-yellow-300 dark:bg-yellow-700"
			href={href}
		>
			<span>{username.slice(0, 1)}</span>
		</Link>
	)
})
