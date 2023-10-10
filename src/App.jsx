import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import FeedNews from "./FeedNews.jsx"
import Login from "./Login.jsx";
import Register from "./Register.jsx";

const routerFeedNews = createBrowserRouter([
  {
    path: "/",
    element: <FeedNews />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routerFeedNews} />
    </>
  )
}

export default App
