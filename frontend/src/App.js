
import './App.css';
import AddBook from './components/books/AddBook';
import NavBar from './components/navbar/navBar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Books from './components/books/Books';
import Login from './components/users/LoginUser';
import RegisterUser from './components/users/RegisterUser';
import Home from './components/home/Home'
import Profile from './components/profile/Profile';
function App() {
  return (
		<div className="App">
			{/* <h1>BOOK APP</h1> */}

			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/books" element={<Books />} />
					<Route path="/addbook" element={<AddBook />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/register" element={<RegisterUser />} />
					<Route path="/Login" element={<Login />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
