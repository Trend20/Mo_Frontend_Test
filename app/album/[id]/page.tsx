import Image from 'next/image'
import Link from 'next/link'

async function getAlbumDetails(id) {
    const res = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`)
    if (!res.ok) throw new Error('Failed to fetch data')
    return res.json()
}

export default async function AlbumPage({ params }) {
    const data = await getAlbumDetails(params.id)
    const album = data.results[0]
    const tracks = data.results.slice(1)

    return (
        <div className="container mx-auto px-4 py-8">
            <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Top 100</Link>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                    <Image
                        src={album.artworkUrl100.replace('100x100', '500x500')}
                        alt={album.collectionName}
                        width={500}
                        height={500}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                <div className="md:w-2/3">
                    <h1 className="text-3xl font-bold mb-2">{album.collectionName}</h1>
                    <h2 className="text-xl text-gray-600 mb-4">{album.artistName}</h2>
                    <p className="mb-4">Release Date: {new Date(album.releaseDate).toLocaleDateString()}</p>
                    <p className="mb-4">Genre: {album.primaryGenreName}</p>
                    <a href={album.collectionViewUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        View on iTunes
                    </a>
                    <h3 className="text-2xl font-semibold mt-8 mb-4">Tracks</h3>
                    <ol className="list-decimal list-inside">
                        {tracks.map(track => (
                            <li key={track.trackId} className="mb-2">{track.trackName}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}