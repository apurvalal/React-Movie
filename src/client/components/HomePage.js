import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import { useNavigate } from 'react-router-dom';
import './homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageHeading from './PageHeading';
import SearchBox from './SearchBox';
import AddWatchList from './AddWatchList';
import RemoveWatchList from './RemoveWatchList';
function HomePage() {
	const navigateTo = useNavigate('/');

	function submitHandler() {
		navigateTo('/');
	}

	const [movies, setMovies] = useState([]);
	const [watchlist, addToWatchlist] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const getMovieReq = async searchValue => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e8040639`;
		const res = await fetch(url);
		const resJson = await res.json();

		if (resJson.Search) {
			setMovies(resJson.Search);
		}
	};

	useEffect(() => {
		getMovieReq(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieInList = JSON.parse(localStorage.getItem('fasal-watchlist'));
		addToWatchlist(movieInList);
	});

	const saveToLocalStorage = items => {
		localStorage.setItem('fasal-watchlist', JSON.stringify(items));
	};

	const addWatchlistMovie = movie => {
		const newWatchlist = [...watchlist, movie];
		addToWatchlist(newWatchlist);
		saveToLocalStorage(newWatchlist);
	};

	const removeWatchlistMovie = movie => {
		const newWatchlist = watchlist.filter(
			inList => inList.imdbID !== movie.imdbID
		);

		addToWatchlist(newWatchlist);
		saveToLocalStorage(newWatchlist);
	};

	return (
		<div className="movie-page">
			<div className="row d-flex align-items-center mb-4" id="main-page">
				<PageHeading heading="Movies" />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className="container-fluid movie-app">
				<MovieList
					movies={movies}
					handleWatchlistClick={addWatchlistMovie}
					addWatchlist={AddWatchList}
				/>
			</div>
			<div className="row d-flex align-items-center mb-4" id="main-page">
				<PageHeading heading="Watchlist" />
			</div>
			<div className="container-fluid movie-app">
				<MovieList
					movies={watchlist}
					handleWatchlistClick={removeWatchlistMovie}
					addWatchlist={RemoveWatchList}
				/>
			</div>
			<form onSubmit={submitHandler}>
				<div className="homepage-button">
					<input className="logout-button" type="submit" value="Logout" />
				</div>
			</form>
		</div>
	);
}

export default HomePage;
