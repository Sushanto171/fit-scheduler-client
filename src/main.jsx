import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import MainLayOut from "./mainLayOut/MainLayOut";
import ErrorPage from "./pages/Error/ErrorPage";
import AuthProvider from "./Providers/AuthProvider";
import { RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home';
import LogIn from './pages/logIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import AllSchedule from './pages/allSchedule/AllSchedule';
import AddSchedule from './pages/addSchedule/AddSchedule';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: < LogIn />
      },
      {
        path: "/signUp",
        element: < SignUp />
      },
      {
        path: "/allSchedule",
        element: < AllSchedule />
      },
      {
        path: "/addSchedule",
        element: < AddSchedule />
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
