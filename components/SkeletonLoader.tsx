import React from 'react'

const SkeletonLoader: React.FC = () => {
    return (
        <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
        </div>
    )
}

export default SkeletonLoader
