import Forgot from "../Pages/Forgot";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import ResetPassword from "../Pages/ResetPassword";
import Signup from "../Pages/Signup";

const AllRoutes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
    private: true,
  },
  {
    name: "Profile",
    path: "/profile",
    component: <Profile />,
    private: true,
  },
  {
    name: "Signup",
    path: "/register",
    component: <Signup />,
    private: false,
  },
  {
    name: "Login",
    path: "/login",
    component: <Login />,
    private: false,
  },
  {
    name: "Forgot",
    path: "/forgot",
    component: <Forgot />,
    private: false,
  },
  {
    name: "ResetPassword",
    path: "/reset-password",
    component: <ResetPassword />,
    private: false,
  },
];

export default AllRoutes;
