import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';

export default function RelatedVideos({ channelId }) {
	const { youtube } = useYoutubeApi();
	const {
		isLoading,
		error,
		data: videos,
	} = useQuery({
		queryKey: ['related', channelId],
		queryFn: () => youtube.relatedVideos(channelId),
	});

	console.log(videos);

	return (
		<>
			{isLoading && <p>Loading...</p>}
			{error && <p>ERROR!</p>}
			{videos && (
				<ul className="ml-6">
					{videos.map((video) => (
						<VideoCard key={video.id} video={video} type="list" />
					))}
				</ul>
			)}
		</>
	);
}
