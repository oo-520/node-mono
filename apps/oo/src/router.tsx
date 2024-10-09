import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { FancyCodeInputPage } from "./pages/fancy-code-input";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/fancy-code-input",
    element: <FancyCodeInputPage />,
  },
  
]);
export const OORouter = <><RouterProvider router={router} /></>;
