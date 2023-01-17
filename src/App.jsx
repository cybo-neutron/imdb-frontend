import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import AddMovie from "./components/AddMovie";
import Add from "./pages/Add";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/add",
    element: <Add />,
  },
]);

function App() {
  return (
    <div className=" min-h-screen bg-gray-500 flex  ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
