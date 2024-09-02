import { title } from 'process'
import { ThumbnailComponent } from './thumbnail'

interface ThumbnailPreviewContainerProps
	extends Pick<VideoResult, 'thumbnailUrl' | 'videoUrl' | 'title'> {}

export function ThumbnailPreviewContainerComponent({
	thumbnailUrl,
	videoUrl,
	title,
}: ThumbnailPreviewContainerProps) {
	return (
		<div className="h-44 w-full rounded-lg">
			<ThumbnailComponent title={title} thumbnailUrl={thumbnailUrl} />
		</div>
	)
}
