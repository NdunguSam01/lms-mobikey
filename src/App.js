import './App.css';
import { Routes, Route } from 'react-router';
import LandingPage from './components/Landing Page';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
