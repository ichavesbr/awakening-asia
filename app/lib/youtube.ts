import type { YoutubeItem } from "./types"

const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const CHANNEL_ID = process.env.NEXT_PUBLIC_CHANNEL_ID

const baseUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}`

const videosUrlQueries = "&part=snippet&order=date&maxResults=8&type=video"
const livesUrlQueries = "&part=snippet&order=date&maxResults=4&type=video&eventType=completed"

const fetchYoutubeData = async (urlQueries: string) => {
  try {
    const res = await fetch(baseUrl + urlQueries)

    if (!res.ok) throw new Error("Failed to fetch YouTube data")

    const data = await res.json()
    const items = data.items.map(({ id, snippet }: YoutubeItem) => ({ id, snippet }))

    return items
  } catch (error) {
    console.log(error)
    return []
  }
}

const getLatestVideos = async () => fetchYoutubeData(videosUrlQueries)
const getLatestLives = async () => fetchYoutubeData(livesUrlQueries)

export { getLatestVideos, getLatestLives }
