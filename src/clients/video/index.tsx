/// Use Swagger or other tools to make the fetch method generative and type safe
/// Then the data models, urls, endpoints could be generated and synced by the Backend
/// and we can gain much more flexibility.
export const fetchVideos = async () => {
	/// This is currently hard code, but it should be separated with domain and endpoints
	/// We can use axios, ky or other fetching library to manipulate the complexity of the the request
	const response = await fetch(
		'https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json',
	)
	/// It is just a simple get request
	if (!response.ok) {
		throw new Error('Cannot fetch the video list')
	}
	return response.json()
}
