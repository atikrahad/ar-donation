import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Donation from "./Components/Donation/Donation";
import Statistics from "./Components/Statistics/Statistics";
import Selectcard from "./Components/SelectCard/Selectcard";
import Eror from "./Components/Erorpage/Eror";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Eror></Eror>,
  },
      {
        path: "/",
    
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/selectcard",
        element: <Selectcard></Selectcard>,
      },

  
  
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
