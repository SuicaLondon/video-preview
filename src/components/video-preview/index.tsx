import clsx from 'clsx'
import { MoreButtonComponent } from '../button/more-button'
import { UserAvatarComponent } from '../user-avatar'
import { VideoTextComponent } from './video-text'
import { VideoTitleComponent } from './video-title'
import { formatViews } from '@/utils/format/format-utils'

type VideoPreviewComponentProps = {
	title: string
	author: string
	views: string
	isOdd: boolean
}

export function VideoPreviewComponent({
	title,
	author,
	views,
	isOdd,
}: VideoPreviewComponentProps) {
	return (
		<div
			className={clsx('flex w-full max-w-96 flex-col space-y-2 rounded-xl', {
				'hover:bg-hover-odd dark:hover:bg-hover-odd-dark': isOdd,
				'hover:bg-hover-even dark:hover:bg-hover-even-dark': !isOdd,
			})}
		>
			<div className="h-44 w-full rounded-lg bg-red-500">Video</div>
			<div className="relative flex space-x-2">
				<UserAvatarComponent username={author} href={`/profile/${author}`} />
				<div>
					<VideoTitleComponent title={title} />
					<VideoTextComponent text={author} />
					<div>
						<div>{formatViews(views)} Views</div>
						<div>3 months ago</div>
					</div>
				</div>
				<MoreButtonComponent className="absolute right-0 top-0" />
			</div>
		</div>
	)
}
