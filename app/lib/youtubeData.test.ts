import { afterEach, describe, expect, it, vi } from "vitest"
import { getLatestLives, getLatestVideos } from "./youtubeData"

vi.mock("next/cache", () => ({ cacheLife: vi.fn() }))

const mockItems = [
  {
    id: {
      videoId: "abc123",
    },
    snippet: {
      title: "Sunday Service",
      description: "Weekly service",
    },
  },
]

describe("getLatestVideos", () => {
  afterEach(() => vi.unstubAllGlobals())

  // deve retornar array vazio em erro de DNS
  it("should return empty array on DNS error", async () => {
    const fetchMock = vi.fn().mockRejectedValue(new Error("getaddrinfo ENOTFOUND"))
    vi.stubGlobal("fetch", fetchMock)
    await expect(getLatestVideos()).resolves.toEqual([])
  })

  // deve retornar array vazio em erro 403
  it("should return empty array on 403 error", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(new Response(JSON.stringify({ error: { message: "API key invalid" } }), { status: 403 }))
    vi.stubGlobal("fetch", fetchMock)
    await expect(getLatestVideos()).resolves.toEqual([])
  })

  // deve retornar array vazio em erro 404
  it("should return empty array on 404 error", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(new Response(JSON.stringify({ error: { message: "Not Found" } }), { status: 404 }))
    vi.stubGlobal("fetch", fetchMock)
    await expect(getLatestVideos()).resolves.toEqual([])
  })

  // deve retornar array vazio em erro 500
  it("should return empty array on 500 error", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(new Response(JSON.stringify({ error: { message: "Server Error" } }), { status: 500 }))
    vi.stubGlobal("fetch", fetchMock)
    await expect(getLatestVideos()).resolves.toEqual([])
  })

  // deve retornar items mapeados
  it("should return mapped items", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ items: mockItems }), { status: 200 }))
    vi.stubGlobal("fetch", fetchMock)
    await expect(getLatestVideos()).resolves.toEqual(mockItems.map(({ id, snippet }) => ({ id, snippet })))
  })

  // deve retornar array vazio quando items vazio
  it("should return empty array when items is empty", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ items: [] }), { status: 200 }))
    vi.stubGlobal("fetch", fetchMock)
    await expect(getLatestVideos()).resolves.toEqual([])
  })

  // deve chamar a url correta
  it("should call the correct url", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ items: mockItems }), { status: 200 }))
    vi.stubGlobal("fetch", fetchMock)
    await getLatestVideos()
    expect(fetchMock).toHaveBeenCalledWith(expect.stringContaining("maxResults=8&type=video"))
  })
})

describe("getLatestLives", () => {
  afterEach(() => vi.unstubAllGlobals())

  // deve chamar a url correta
  it("should call the correct url", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ items: mockItems }), { status: 200 }))
    vi.stubGlobal("fetch", fetchMock)
    await getLatestLives()
    expect(fetchMock).toHaveBeenCalledWith(expect.stringContaining("maxResults=4&type=video&eventType=completed"))
  })
})
