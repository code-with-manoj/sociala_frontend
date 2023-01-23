import Logo from "../Components/Logo";
import React, { useState } from "react";
import { AiOutlineMobile } from "react-icons/ai";
import { TfiEmail, TfiLock } from "react-icons/tfi";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthReset } from "../Redux/Actions/AuthAction";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation().state;
  const data = useSelector((state) => state.AuthReducer);
  const [formValues, setFormValues] = useState({ email: location });

  // handleChange
  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  // handelSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      AuthReset(formValues, () => {
        setFormValues({ email: location });
        navigate("/login");
      })
    );
  };
  return (
    <>
      <div className="flex h-screen bg-white absolute top-0 left-0 w-full lg:bg-gray-50 lg:gap-5 items-center">
        <figure className="h-full  lg:w-1/3 lg:flex hidden">
          <img src="Assets/login-bg.jpg" className="h-full" alt="register" />
        </figure>
        <section className="lg:w-2/3  w-full lg:p-4 sm:w-4/5 md:w-3/4 mx-auto lg:px-20 ">
          <div className="lg:mb-5 lg:px-0 px-5">
            <Logo />
          </div>
          <div className="lg:p-10 p-5 bg-white rounded lg:shadow">
            <h3 className="text-lg mb-5 uppercase font-bold">
              reset your password
            </h3>
            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="p-2 mb-4 border rounded flex items-center gap-3">
                <label htmlFor="email">
                  <TfiEmail className="text-gray-500 text-xl" />
                </label>
                <input
                  type="email"
                  name="email"
                  value={formValues?.email}
                  onChange={handleChange}
                  className="outline-none px-3 w-full text-sm"
                  placeholder="Your Email Address"
                />
              </div>
              {/* Password */}
              <div className="p-2 mb-4 border rounded flex items-center gap-3">
                <label htmlFor="otp">
                  <AiOutlineMobile className="text-gray-500 text-xl" />
                </label>
                <input
                  type="text"
                  name="otp"
                  value={formValues?.otp}
                  onChange={handleChange}
                  className="outline-none px-3 w-full text-sm"
                  placeholder="OTP"
                />
              </div>
              {/* Password */}
              <div className="p-2 mb-4 border rounded flex items-center gap-3">
                <label htmlFor="password">
                  <TfiLock className="text-gray-500 text-xl" />
                </label>
                <input
                  type="password"
                  name="password"
                  value={formValues?.password}
                  onChange={handleChange}
                  className="outline-none px-3 w-full text-sm"
                  placeholder="Password"
                />
              </div>
              {/* Submit */}
              <div className="mb-5 border hover:bg-transparent hover:text-blue-500 bg-blue-500 text-white cursor-pointer border-blue-500 text-center rounded flex items-center gap-3">
                <input
                  type="submit"
                  value={data.loading ? "..." : "Reset"}
                  disabled={data.loading}
                  className="w-full p-2 uppercase cursor-pointer text-center"
                />
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResetPassword;
