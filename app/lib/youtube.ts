const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const CHANNEL_ID = process.env.NEXT_PUBLIC_CHANNEL_ID
const urlBase = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}`
const videosUrlQueries = "&part=snippet&order=date&maxResults=8&type=video"
const livesUrlQueries = "&part=snippet&order=date&maxResults=4&type=video&eventType=completed"

const fetchData = async (urlQueries: string) => {
  try {
    const res = await fetch(urlBase + urlQueries)

    if (!res.ok) throw new Error("Failed to fetch YouTube data")

    const data = await res.json()

    return data.items
  } catch (error) {
    console.log(error)
    return []
  }
}

const getLastestVideos = async () => fetchData(videosUrlQueries)
const getLastestLives = async () => fetchData(livesUrlQueries)

export { getLastestVideos, getLastestLives }
