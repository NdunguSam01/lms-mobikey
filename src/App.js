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
        <Route exact path='/' element={<LandingPage/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/dashboard' element={<Dashboard/>}></Route>
        <Route exact path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
