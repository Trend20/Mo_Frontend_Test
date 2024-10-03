import SearchBar from "@/components/Search";
import AlbumList from "@/components/AlbumList";
import Pagination from "@/components/Pagination";

// fetch albums
async function getTopAlbums() {
    const res = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
    if (!res.ok) throw new Error('Failed to fetch data')
    return res.json()
}

export default async function Music({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    const data = await getTopAlbums()
    const allAlbums = data.feed.entry

    const search = typeof searchParams.search === 'string' ? searchParams.search : ''
    const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page) : 1
    const pageSize = 12

    const filteredAlbums = allAlbums.filter((album: any) =>
        album['im:name'].label.toLowerCase().includes(search.toLowerCase()) ||
        album['im:artist'].label.toLowerCase().includes(search.toLowerCase())
    )

    const totalPages = Math.ceil(filteredAlbums.length / pageSize)
    const paginatedAlbums = filteredAlbums.slice((page - 1) * pageSize, page * pageSize)

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Top 100 Albums</h1>
            <SearchBar initialSearch={search} />
            <AlbumList albums={paginatedAlbums} />
            <Pagination currentPage={page} totalPages={totalPages} search={search} />
        </main>
    )
}