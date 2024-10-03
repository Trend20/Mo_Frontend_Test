export async function getTopAlbums() {
    const res = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
    if (!res.ok) throw new Error('Failed to fetch data')
    return res.json()
}