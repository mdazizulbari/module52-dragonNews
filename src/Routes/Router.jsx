import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import { Component } from "react";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { path: "/", Component: Home },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      { path: "/auth/login", Component: Login },
      { path: "/auth/register", Component: Register },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails />
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading />,
  },
  { path: "/*", element: <h1>404</h1> },
]);

export default router;
//3 min
