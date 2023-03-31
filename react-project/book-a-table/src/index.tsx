import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./components/utils/ErrorPage";
import App from "./App";
import Home from "./components/home/Home";
import BookTable from "./components/book/BookTable";
import BookSucces from "./components/book/BookSucces";
import Menu from "./components/shop-online/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/reservations",
        element: <BookTable />,
      },
      { path: "/reservations/book-success", element: <BookSucces /> },
      {
        path: "/login",
        element: <h1>ToDo</h1>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
