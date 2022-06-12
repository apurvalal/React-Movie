import React from 'react';
import './homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MovieList(props) {
	const WatchList = props.addWatchlist;
	return (
		<div className="movie-pannel">
			{props.movies.map((movie, index) => (
				<div className="image-container d-flex justify-content-start m-3">
					<img src={movie.Poster} alt="movie"></img>
					<div
						onClick={() => props.handleWatchlistClick(movie)}
						className="overlay d-flex align-items-center justify-content-center"
					>
						<WatchList />
					</div>
				</div>
			))}
		</div>
	);
}

export default MovieList;
