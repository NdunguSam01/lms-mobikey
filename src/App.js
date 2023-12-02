import './App.css';
import { Routes, Route } from 'react-router';
import LandingPage from './components/Landing Page';
import Login from './components/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </>
  );
}

export default App;
