import React from 'react';
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video, type }) {
	const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
	const navigate = useNavigate();
	const isList = type === 'list';

	return (
		<li
			className={
				(isList ? 'flex mb-6 pointer-events-none' : '') + ' cursor-pointer'
			}
			onClick={() => {
				navigate(`/videos/watch/${video.id}`, { state: { video } });
			}}
		>
			<div className={(isList ? 'w-2/5' : '') + ' overflow-hidden rounded-md'}>
				<img
					src={thumbnails.medium.url}
					alt={title}
					className={isList ? 'w-full' : 'w-full'}
				/>
			</div>
			<div className={isList ? 'w-3/5 pl-2 self-start' : ''}>
				<p className="font-semibold mb-2 line-clamp-2">{title}</p>
				<p className="text-sm opacity-80">{channelTitle}</p>
				<p className="text-sm opacity-80">{formatAgo(publishedAt, 'ko')}</p>
			</div>
		</li>
	);
}
