import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import FeedNews from "./FeedNews.jsx"
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Profile from "./Profile.jsx";
import ProfileEdit from "./ProfileEdit.jsx";

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
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "edit",
        element: <ProfileEdit />,
      }
    ]
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
