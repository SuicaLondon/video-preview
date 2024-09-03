import clsx from 'clsx'
import { MoreButtonComponent } from '../button/more-button'
import { UserAvatarComponent } from '../user-avatar'
import { VideoTextComponent } from './video-text'
import { VideoTitleComponent } from './video-title'
import { formatViews } from '@/utils/format/format-utils'
import { ThumbnailPreviewContainerComponent } from './thumbnail-preview-container'
import { VideoMode, VideoModeProps } from './index.type'
import { VideoResult } from '@/models/video-list'
import { formatDistance } from 'date-fns'

interface VideoPreviewComponentBasicProps
	extends Pick<
		VideoResult,
		| 'id'
		| 'title'
		| 'thumbnailUrl'
		| 'duration'
		| 'uploadTime'
		| 'views'
		| 'author'
		| 'videoUrl'
	> {
	isOdd?: boolean
}

type VideoPreviewComponentProps = VideoPreviewComponentBasicProps &
	VideoModeProps

export function VideoPreviewComponent({
	title,
	author,
	views,
	thumbnailUrl,
	videoUrl,
	duration,
	uploadTime,
	mode = VideoMode.static,
	isOdd = true,
	...props
}: VideoPreviewComponentProps) {
	return (
		<div
			className={clsx(
				'flex w-full flex-col space-y-4 rounded-xl p-3 xl:max-w-96',
				{
					'hover:bg-hover-odd dark:hover:bg-hover-odd-dark': isOdd,
					'hover:bg-hover-even dark:hover:bg-hover-even-dark': !isOdd,
				},
			)}
		>
			<ThumbnailPreviewContainerComponent
				title={title}
				thumbnailUrl={thumbnailUrl}
				videoUrl={videoUrl}
				duration={duration}
				mode={mode}
				{...props}
			/>
			<div className="relative flex h-32 space-x-2">
				<UserAvatarComponent username={author} href={`/profile/${author}`} />
				<div className="flex-1">
					<VideoTitleComponent title={title} />
					<VideoTextComponent text={author} />
					<div>
						<div>{formatViews(views)} Views</div>
						<div>{formatDistance(uploadTime, new Date(), { addSuffix: true })}</div>
					</div>
				</div>
				<MoreButtonComponent className="absolute right-0 top-0" />
			</div>
		</div>
	)
}
