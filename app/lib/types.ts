export interface NavLink {
  href: string
  label: string
}

export interface Thumbnail {
  url: string
  width: number
  height: number
}

export interface YoutubeItem {
  id: {
    videoId: string
  }
  snippet: {
    title: string
    description: string
    publishedAt: string
    thumbnails: {
      default: Thumbnail
      medium: Thumbnail
      high: Thumbnail
    }
  }
}
