import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostDetail from "./components/PostDetail.tsx";
import ArticleList from "./components/articleList/ArticleList.tsx";
import UserForm from "./components/form/UserForm.tsx";
import UserList from "./components/userList/UserList.tsx";
import ArticleEditForm from "./components/form/ArticleEditForm.tsx";
import UserEditForm from "./components/form/UserEditForm.tsx";
import ArticleForm from "./components/form/ArticleForm.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/post/:id",
    element: <PostDetail />,
  },

  {
    path: "/articleform",
    element: <ArticleForm />,
  },
  {
    path: "/userform",
    element: <UserForm />,
  },

  {
    path: "/articleeditform/:id",
    element: <ArticleEditForm />,
  },
  {
    path: "/usereditform/:id",
    element: <UserEditForm />,
  },

  {
    path: "/articlelist",
    element: <ArticleList />,
  },
  {
    path: "/userlist",
    element: <UserList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
