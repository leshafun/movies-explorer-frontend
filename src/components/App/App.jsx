import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Main from '../Main/Main.jsx';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Movies from '../Movies/Movies.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import Profile from '../Profile/Profile.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';

function App() {
	const [isLoggedIn] = useState(true);
	return (
		<div className="app">
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header />
							<Main />
							<Footer />
						</>
					}
				/>
				<Route
					path="/movies"
					element={
						<>
							<Header isLoggedIn={isLoggedIn} />
							<Movies />
						</>
					}
				/>
				<Route
					path="/saved-movies"
					element={
						<>
							<Header isLoggedIn={isLoggedIn} />
							<SavedMovies />
						</>
					}
				/>
				<Route
					path="/profile"
					element={
						<>
							<Header isLoggedIn={isLoggedIn} />
							<Profile name="Алексей" />
						</>
					}
				/>
				<Route path="/signup" element={<Register />} />
				<Route path="/signin" element={<Login />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
