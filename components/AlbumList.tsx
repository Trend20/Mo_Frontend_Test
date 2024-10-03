'use client'

import Link from 'next/link'
import AlbumCard from "@/components/AlbumCard";
import {Album, AlbumListProps} from "@/types";


export default function AlbumList({ albums }: AlbumListProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {albums.map((album: Album, index:number) => (
                <Link key={album.id.attributes['im:id']} href={`/album/${album.id.attributes['im:id']}`}>
                    <AlbumCard album={album} rank={index + 1} />
                </Link>
            ))}
        </div>
    )
}