import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

// import Login from "./Components/Login";
// import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
// import NotFound from "./Components/NotFound";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Leftbar from "./Components/Leftbar";
import Rightbar from "./Components/Rightbar";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import CardSection from "./Components/main/CardSection";
import Main from "./Components/main/Main";

const Layout = () => {
  return (
    <>
      <div className="w-full">
        <div className="top-0 w-full fixed z-10">
          <Navbar />
        </div>
        <div className="flex bg-gray-100">
          <div className="flex-auto left-0 w-[20%] top-20 absolute">
            <Leftbar />
          </div>
          <div className=" px-3 flex-auto left-[25%] w-[50%] top-20 absolute mx-auto">
            <CardSection />
            <Main/>
          </div>
          <div className="flex-auto right-0 w-[20%] top-20 absolute">
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="profile/:id" element={<Profile />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);

function App() {
  return (
    // <Login/>
    <RouterProvider router={router} />
  );
}

export default App;
