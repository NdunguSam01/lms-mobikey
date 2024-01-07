import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import requests from './Data/Leave Requests.json'
import LandingPage from './Landing Page/Landing Page';
import Login from './Landing Page/Login';
import ForgotPassword from './Landing Page/Forgot';
import Layout from './Dashboard Components/Layout';
import PageNotFound from './PageNotFound'
import LeaveForm from './Dashboard Pages/Leave Form'
import LeaveRequests from './Dashboard Pages/Leave History/Leave Requests'
import Pending from './Dashboard Pages/Pending Requests'
import NewEmployee from './Dashboard Pages/New Employee'
import ViewEmployees from './Dashboard Pages/View Employees'
import Profile from './Dashboard Pages/Profile'
import Statistics from './Dashboard Pages/Statistics';
import Request from './Dashboard Pages/Leave History/Request';

const router=createBrowserRouter(
  [
    {
      path: "/",
      element: <LandingPage/>,
    },
    {
      path: "login",
      element: <Login/>
    },
    {
      path: "forgot",
      element: <ForgotPassword/>
    },
    {
      path: "dashboard",
      element: <Layout />,
      children: 
      [
        {
          path: "statistics",
          element: <Statistics/>
        },
        { 
          path: "leave-form",
          element: <LeaveForm /> 
        },
        { 
          path: "leave-history", 
          element: <LeaveRequests requests={requests}/>
        },
        {
          path: "pending",
          element: <Pending/>
        },
        {
          path: "new-employee",
          element: <NewEmployee/>
        },
        {
          path: "view-employees",
          element: <ViewEmployees/>
        },
        {
          path: "profile",
          element: <Profile/>
        },
        {
          path: "request/:id",
          element: <Request requests={requests}/>
        }
      ],
    },
    {
      path: "*",
      element: <PageNotFound/>
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
