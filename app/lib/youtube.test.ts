import { afterEach, describe, expect, it, vi } from "vitest"
import { getLatestLives, getLatestVideos } from "./youtube"

const mockItem = {
  id: { videoId: "abc123" },
  snippet: {
    title: "Sunday Service",
    description: "Weekly service",
    publishedAt: "2025-04-27T10:00:00Z",
    thumbnails: {
      default: { url: "", width: 120, height: 90 },
      medium: { url: "", width: 320, height: 180 },
      high: { url: "", width: 480, height: 360 },
    },
  },
}

afterEach(() => vi.restoreAllMocks())

describe("getLatestLives", () => {
  it("returns mapped items with id and snippet on success", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ items: [mockItem] }),
      }),
    )

    const result = await getLatestLives()

    expect(result).toHaveLength(1)
    expect(result[0]).toHaveProperty("id")
    expect(result[0]).toHaveProperty("snippet")
  })

  it("returns empty array on network error", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("Network error")))

    const result = await getLatestLives()

    expect(result).toStrictEqual([])
  })

  it("returns empty array on non-ok response", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 403,
        text: async () => "Forbidden",
      }),
    )

    const result = await getLatestLives()

    expect(result).toStrictEqual([])
  })
})

describe("getLatestVideos", () => {
  it("returns mapped items with id and snippet on success", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ items: [mockItem] }),
      }),
    )

    const result = await getLatestVideos()

    expect(result).toHaveLength(1)
    expect(result[0].snippet.title).toBe("Sunday Service")
  })
})
