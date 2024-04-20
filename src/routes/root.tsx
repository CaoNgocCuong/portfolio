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
    children: [
      {
        errorElement: <div>Oops! Something went wrong...</div>,
        children: [
          {
            id: "dashboard",
            index: true,
            element: <div>Hello World</div>,
          },
          {
            id: "about-me",
            path: "about-me",
            element: <div>About Me</div>,
          },
          {
            id: "projects",
            path: "projects",
            element: <div>Projects</div>,
          },
          {
            id: "blogs",
            path: "blogs",
            element: <div>Blogs</div>,
          },
          {
            id: "contact-me",
            path: "contact-me",
            element: <div>Contact Me</div>,
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
