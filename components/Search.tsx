'use client'

import {FormEvent, useState} from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar({ initialSearch = '' }) {
    const [searchTerm, setSearchTerm] = useState<string>(initialSearch)
    const router = useRouter()

    const handleSearch = (e:FormEvent) => {
        e.preventDefault()
        router.push(`/?search=${encodeURIComponent(searchTerm)}`)
    }

    return (
        <form onSubmit={handleSearch} className="mb-8">
            <input
                type="text"
                placeholder="Search albums or artists..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </form>
    )
}