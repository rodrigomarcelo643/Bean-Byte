import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Sidebar } from "./components/Sidebar";
import AdminLogin from "./components/AdminLogin";
import LandingPage from "./LandingPage/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLogin />,
    children: [],
  },
  {
    path: "/Admin",
    element: <Sidebar />,
  },
  {
    path: "/LandingPage",
    element: <LandingPage />,
  },
]);

export default router;
