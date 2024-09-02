import clsx from 'clsx'
import { MoreButtonComponent } from '../button/more-button'
import { UserAvatarComponent } from '../user-avatar'
import { VideoTextComponent } from './video-text'
import { VideoTitleComponent } from './video-title'
import { formatViews } from '@/utils/format/format-utils'
import { ThumbnailPreviewContainerComponent } from './thumbnail-preview-container'

interface VideoPreviewComponentProps extends VideoResult {
	isOdd: boolean
}

export function VideoPreviewComponent({
	title,
	author,
	views,
	thumbnailUrl,
	videoUrl,
	isOdd,
}: VideoPreviewComponentProps) {
	return (
		<div
			className={clsx('flex w-full max-w-96 flex-col space-y-2 rounded-xl p-3', {
				'hover:bg-hover-odd dark:hover:bg-hover-odd-dark': isOdd,
				'hover:bg-hover-even dark:hover:bg-hover-even-dark': !isOdd,
			})}
		>
			<ThumbnailPreviewContainerComponent
				title={title}
				thumbnailUrl={thumbnailUrl}
				videoUrl={videoUrl}
			/>
			<div className="relative flex h-36 space-x-2">
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
