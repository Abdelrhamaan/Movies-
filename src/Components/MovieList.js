import React from 'react'
import MyCard from './MyCard'
import MyPagination from './MyPagination'

const MovieList = ({ movies, getCurrentPage, pageCount }) => {
    return (
        <>
            <div className="movie-grid">
                {/* map on movies and pass every movie with key to card */}
                {movies.length >= 1 ? (movies.map(
                    (mov) => {
                        return (<MyCard key={mov.id} mov={mov} />)
                    }
                )) : <h3 className='text-center danger'>لا يوجد أفلام </h3>}
            </div>
            <MyPagination getCurrentPage={getCurrentPage} pageCount={pageCount} />
        </>
    )
}

export default MovieList
