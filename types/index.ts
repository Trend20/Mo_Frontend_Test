// iTunes API Types
export interface ItunesApiResponse {
    feed: {
        entry: Album[]
    }
}

export interface Album {
    'im:name': { label: string }
    'im:image': Array<{ label: string }>
    'im:artist': { label: string }
    id: { attributes: { 'im:id': string } }
}

export interface AlbumDetails {
    collectionId: number
    collectionName: string
    artistName: string
    artworkUrl100: string
    releaseDate: string
    primaryGenreName: string
    collectionViewUrl: string
    trackCount: number
}

export interface Track {
    trackId: number
    trackName: string
    trackNumber: number
}

export interface AlbumDetailsApiResponse {
    results: [AlbumDetails, ...Track[]]
}

// Component Props Types
export interface SearchBarProps {
    initialSearch: string
}

export interface AlbumListProps {
    albums: Album[]
}

export interface AlbumCardProps {
    album: Album
    rank: number
}

export interface PaginationProps {
    currentPage: number
    totalPages: number
    search: string
}

// Page Props Types
export interface HomeProps {
    searchParams: {
        search?: string
        page?: string
    }
}

export interface AlbumPageProps {
    params: {
        id: number
    }
}

// Layout Props Type
export interface RootLayoutProps {
    children: React.ReactNode
}