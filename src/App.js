import './App.css';
import { Routes, Route } from 'react-router';
import LandingPage from './Landing Page components/Landing Page';
import Login from './Landing Page components/Login';
import PageNotFound from './Dashboard components/PageNotFound';
import Dashboard from './Dashboard Pages/Dashboard';
import ForgotPassword from './Landing Page components/Forgot';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/forgot' element={<ForgotPassword/>}></Route>
        <Route exact path='/dashboard' element={<Dashboard/>}></Route>
        <Route exact path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
