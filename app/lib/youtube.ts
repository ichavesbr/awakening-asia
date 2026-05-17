import { cacheLife } from "next/cache"
import { YoutubeItem } from "./types"

const API_KEY = process.env.API_KEY
const CHANNEL_ID = process.env.CHANNEL_ID

const baseUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&`

const videosUrlQueries = "maxResults=8&type=video"
const livesUrlQueries = "maxResults=4&type=video&eventType=completed"

const fetchYoutubeData = async (urlQueries: string) => {
  "use cache"
  cacheLife("hours")

  // Simula atraso de 1 segundo
  await new Promise(resolve => setTimeout(resolve, 3000))

  try {
    const res = await fetch(baseUrl + urlQueries)

    if (!res.ok) {
      const body = await res.text()
      console.error("[youtube] status:", res.status, body)
      throw new Error("Failed to fetch YouTube data")
    }

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
