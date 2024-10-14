import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Overview from "./pages/Overview.jsx";
import ChooseOpponentPage from "./pages/ChooseOpponentPage.jsx";
import FightPage from "./pages/FightPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/overview",
    element: <Overview />,
  },
  {
    path: "/choose-opponent",
    element: <ChooseOpponentPage />,
  },
  {
    path: "/fight/:id",
    element: <FightPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
