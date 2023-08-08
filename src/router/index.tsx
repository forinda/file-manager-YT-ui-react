import { createBrowserRouter, RouteObject } from "react-router-dom";
import Homepage from "../views/Homepage";
import BaseComponent from "../components/BaseComponent";
import SingleFolder from "../views/SingleFolder";
import UploadFile from "../views/UploadFile";

const routes = [
  {
    path: "/",
    element: <BaseComponent />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "/folder/:folderId",
        element: <SingleFolder />,
      },
      {
        path: "/folder/:folderId/upload",
        element: <UploadFile />,
      },
    ],
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
] satisfies RouteObject[];

const router = createBrowserRouter(routes);

export default router;
