import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Navbar from "../Component/header";
import { Link } from "react-router-dom";
import Notification from "../Component/notification";

const Login = () => {
  const [showNotification, setShowNotification] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Required* please enter the email address"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters long")
        .required("Required* should be atleast 6 characters"),
    }),
    onSubmit: (values) => {
      setShowNotification(true);
    },
  });

  return (
    <>
      <div className="bg-[url(assets/mainbg.png)] h-[100vh] bg-cover bg-no-repeat">
        <Navbar />
        <div className="flex flex-col justify-center items-center h-[80vh]">
          <div className="bg-white p-9 rounded-lg shadow-lg w-full h-full max-h-[450px] max-w-[546px] flex flex-col justify-center">
            <h2 className="font-sans text-2xl font-bold leading-8 mb-6 text-[#000000CC]">
              Login
            </h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-[#000000CC] text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  {...formik.getFieldProps("email")}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="Your email address"
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-500 text-xs italic mt-2">
                    {formik.errors.email}
                  </p>
                ) : null}
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password*
                </label>
                <input
                  type="password"
                  id="password"
                  {...formik.getFieldProps("password")}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    formik.touched.password && formik.errors.password
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="********"
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className="text-red-500 text-xs italic mt-2">
                    {formik.errors.password}
                  </p>
                ) : null}
              </div>
              <div className="flex items-center justify-between mb-6">
                <Link
                  to="/forget"
                  className="inline-block align-baseline font-bold text-sm text-[#CDAB00] hover:text-yellow-800"
                >
                  Forgot your password?
                </Link>
              </div>
              <div className="flex items-center justify-start gap-5">
                <button
                  className="bg-[#CDAB00] hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Log in
                </button>
                <Link
                  to="/signup"
                  className="inline-block align-baseline font-bold text-sm text-[#CDAB00] hover:text-yellow-800"
                >
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Notification
        message="Login successful!"
        show={showNotification}
        onClose={() => setShowNotification(false)}
      />
    </>
  );
};

export default Login;
