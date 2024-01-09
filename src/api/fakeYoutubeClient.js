import axios from 'axios';

export default class FakeYoutubeClient {
	async search() {
		return axios.get(`/videos/data_search.json`);
	}

	async videos() {
		return axios.get(`/videos/data_popular.json`);
	}

	async channels() {
		return axios.get(`/videos/data_channel.json`);
	}

	async playlists() {
		return axios.get(`/videos/data_playlist.json`);
	}
}
