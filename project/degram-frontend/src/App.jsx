import FeedNews from "./FeedNews.jsx"
import Login from "./Login.jsx";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const routerFeedNews = createBrowserRouter([
  {
    path: "/",
    element: <FeedNews />,
  },
  {
    path: "/login",
    element: <Login />,
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
