import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import AllRoutes from "./Routes/AllRoutes";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Header />

      <Routes>
        {AllRoutes.map((item, index) => {
          return (
            <Route
              key={index}
              element={item.private ? <PrivateRoute /> : <PublicRoute />}
            >
              <Route
                name={item.name}
                path={item.path}
                element={item.component}
                exact={true}
              />
            </Route>
          );
        })}
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
