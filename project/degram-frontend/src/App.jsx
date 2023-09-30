import FeedNews from "./FeedNews.jsx"
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
    element: <h1>LOGIN</h1>,
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
