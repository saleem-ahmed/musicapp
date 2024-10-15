import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Navbar from "../Component/header";
import { Link, useNavigate } from "react-router-dom";
import Notification from "../Component/notification";

const Forget = () => {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Required* please enter the email address"),
    }),
    onSubmit: (values) => {
      navigate("/reset");
      setShowNotification(true);
    },
  });

  return (
    <>
      <div className="bg-[url(assets/mainbg.png)] h-[100vh] bg-cover bg-no-repeat">
        <Navbar />
        <div className="flex flex-col justify-center items-center h-[80vh]">
          <div className="bg-white p-9 rounded-lg shadow-lg w-full h-full max-h-[450px] max-w-[546px] flex flex-col justify-center">
            <h2 className="font-sans text-2xl font-bold leading-8 text-[#000000CC]">
              Reset Your Password
            </h2>
            <p className="mb-6 text-[#5D5F63]">
              To request a new password, enter your email{" "}
            </p>
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
              <div className="flex items-center justify-start gap-5">
                <button
                  className="bg-[#CDAB00] hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Continue
                </button>
                <Link
                  to="/login"
                  className="inline-block align-baseline font-bold text-sm text-[#CDAB00] hover:text-yellow-800"
                >
                  Back
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Notification
        message="Successful!"
        show={showNotification}
        onClose={() => setShowNotification(false)}
      />
    </>
  );
};

export default Forget;
