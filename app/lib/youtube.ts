const getLastestVideos = async () => {
  try {
    const urlBase = "https://www.googleapis.com/youtube/v3/search?"
    const urlQueries = `key=${process.env.NEXT_PUBLIC_API_KEY}&channelId=${process.env.NEXT_PUBLIC_CHANNEL_ID}&part=snippet&order=date&maxResults=8&type=video`
    const res = await fetch(urlBase + urlQueries)

    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)

    const data = await res.json()

    return data.items
  } catch (error) {
    console.log(error)
    return []
  }
}

const getLastestLives = async () => {
  try {
    const urlBase = "https://www.googleapis.com/youtube/v3/search?"
    const urlQueries = `key=${process.env.NEXT_PUBLIC_API_KEY}&channelId=${process.env.NEXT_PUBLIC_CHANNEL_ID}&part=snippet&order=date&maxResults=4&type=video&eventType=completed`
    const res = await fetch(urlBase + urlQueries)

    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)

    const data = await res.json()

    return data.items
  } catch (error) {
    console.log(error)
    return []
  }
}

export { getLastestVideos, getLastestLives }
