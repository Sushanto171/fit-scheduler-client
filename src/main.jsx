import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayOut from "./mainLayOut/MainLayOut";
import AddSchedule from "./pages/addSchedule/AddSchedule";
import AllSchedule from "./pages/allSchedule/AllSchedule";
import ErrorPage from "./pages/Error/ErrorPage";
import Home from "./pages/Home/Home";
import LogIn from "./pages/logIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import AuthProvider from "./Providers/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/allSchedule",
        element: <AllSchedule />,
        loader: () => fetch("http://localhost:5000/schedule"),
      },
      {
        path: "/addSchedule",
        element: <AddSchedule />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
