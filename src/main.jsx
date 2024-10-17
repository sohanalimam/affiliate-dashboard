import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Profile from './components/Profile/Profile.jsx';
import Withdraw from './components/Withdraw/Withdraw.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Subscription from './components/Subscription/Subscription.jsx';
import LoginAndSignUp from './components/LoginAndSignUp/LoginAndSignUp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "Subscription",
        element: <Subscription />,
      },
      {
        path: "Withdraw",
        element: <Withdraw />,
      },
      {
        path: "Profile",
        element: <Profile />
      },
      {
        path: "LoginAndSignUp",
        element: <LoginAndSignUp />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
