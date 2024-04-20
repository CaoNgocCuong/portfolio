// Libraries
import { RouteObject, createBrowserRouter } from "react-router-dom";

// Components
import App from "@/App";

const routes: RouteObject[] = [
  {
    id: "root",
    path: "/",
    element: <App />,
    errorElement: <div>Oops! Something went wrong...</div>,
  },
];

export const router = createBrowserRouter(routes);
