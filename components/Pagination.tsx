import Link from 'next/link'

export default function Pagination({ currentPage, totalPages, search }) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

    return (
        <div className="flex justify-center items-center space-x-2 mt-8">
            {currentPage > 1 && (
                <Link
                    href={`/?page=${currentPage - 1}${search ? `&search=${search}` : ''}`}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Previous
                </Link>
            )}
            {pages.map((page) => (
                <Link
                    key={page}
                    href={`/?page=${page}${search ? `&search=${search}` : ''}`}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                        currentPage === page
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                    {page}
                </Link>
            ))}
            {currentPage < totalPages && (
                <Link
                    href={`/?page=${currentPage + 1}${search ? `&search=${search}` : ''}`}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Next
                </Link>
            )}
        </div>
    )
}