import React from 'react';

const SingleCard = ({movie, handleWatchTime}) => {
    // console.log(movie)
    return (
        <div>
            <div className="movie-card card">
                
                    <div className="movie-poster w-50 m-auto">
                    <img className='m-auto w-25' src={movie.poster} alt="" />
                    </div>
                    
                    <h3>{movie.movieName}</h3>
                    <div className='d-flex justify-content-between'>
                        
                        <p>Watching Time:{movie.watchTime}</p>
                        <p>Rating:{movie.imdbRating}</p>
                    </div>
                    <button onClick={()=>handleWatchTime(movie.watchTime)} className='btn btn-info w-75 m-auto'>BooK Now</button>
                </div>
        </div>
    );
};

export default SingleCard;