import Image from 'next/image'

interface AlbumCardProps {
    album: any;
    rank: number
}

export default function AlbumCard({ album, rank }: AlbumCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="relative">
                <Image
                    src={album['im:image'][2].label}
                    alt={album['im:name'].label}
                    width={170}
                    height={170}
                    className="w-full h-auto"
                />
                <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    {rank}
                </div>
            </div>
            <div className="p-4">
                <h2 className="font-semibold text-lg mb-1 truncate">{album['im:name'].label}</h2>
                <p className="text-gray-600 text-sm truncate">{album['im:artist'].label}</p>
            </div>
        </div>
    )
}