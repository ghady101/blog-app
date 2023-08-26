import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './Components/IndexPage';
import CreatePost from './Components/CreatePost';
import PostPage from './Components/PostPage';
import EditPost from './Components/EditPost';
import { UserContextProvider } from './Components/UserContext';
import Login from './Components/Login';
import Register from './Components/Register';
import Layout from './Components/Layout';

function App() {
	return (
		<UserContextProvider>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<IndexPage />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/create' element={<CreatePost />} />
					<Route path='/post/:id' element={<PostPage />} />
					<Route path='/edit/:id' element={<EditPost />} />
				</Route>
			</Routes>
		</UserContextProvider>
	);
}

export default App;
