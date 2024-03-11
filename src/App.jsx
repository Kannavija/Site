import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./assets/components/Home/Home";
import Root from "./assets/components/Root/Root";
import NousContacter from "./assets/components/NousContacter/NousContacter";
import Compte from "./assets/components/Compte/Compte";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/NousContacter",
        element: <NousContacter />,
      },
      {
        path: "/Compte",
        element: <Compte />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
