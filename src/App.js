import './App.css';
import { Routes, Route } from 'react-router';
import LandingPage from './components/Landing Page/Landing Page';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import LeaveForm from './components/Leave Form';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/leave' element={<LeaveForm/>}></Route>
        <Route path='/navbar' element={<Navbar/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
