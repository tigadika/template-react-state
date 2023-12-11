import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Layout.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import AddPage from "./pages/AddPage.jsx";

// navigation guard
const authHome = () => {
  const access_token = localStorage.access_token;
  if (!access_token) {
    throw redirect("/login");
  }
  return null;
};

const authLogin = () => {
  const access_token = localStorage.access_token;
  if (access_token) {
    throw redirect("/");
  }
  return null;
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: authHome,
      },
      {
        path: "/login",
        element: <LoginPage />,
        loader: authLogin,
      },
      {
        path: "/add",
        element: <AddPage />,
        loader: authHome,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
        loader: authHome,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
