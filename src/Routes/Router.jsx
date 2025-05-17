import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import { Component } from "react";
import Home from "../pages/Home";
import CategoryNews from "../components/homeLayout/CategoryNews";

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
      },
    ],
  },
  // {path:"/auth", Component:},
  // {path:"/news", Component:},
  // {path:"/*", Component:},
]);

export default router;
//3 min 