import React from "react";
import Navbar from "../Component/header";
import { Link } from "react-router-dom";

const Reset = () => {
  return (
    <>
      <div className="bg-[url(assets/mainbg.png)] h-[100vh] bg-cover bg-no-repeat">
        <Navbar />
        <div className="flex flex-col justify-center items-center h-[80vh]">
          <div className="bg-white p-9 rounded-lg shadow-lg w-full h-full max-h-[450px] max-w-[546px] flex flex-col justify-center">
            <h2 className="font-sans text-2xl font-bold leading-8 text-[#000000CC]">
              Password Reset Email Sent
            </h2>
            <p className=" mb-6 text-[#5D5F63] w-max-[400px] w-full"></p>
            <div className="flex justify-center items-center">
              <svg
                width="119"
                height="119"
                viewBox="0 0 119 119"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M89.4982 105.562C89.0395 106.022 88.4947 106.387 87.8948 106.636C87.295 106.884 86.652 107.012 86.0026 107.012C85.3532 107.012 84.7102 106.884 84.1104 106.636C83.5106 106.387 82.9657 106.022 82.507 105.562L71.9953 95.0508C71.5363 94.5917 71.1721 94.0468 70.9237 93.447C70.6753 92.8472 70.5474 92.2044 70.5474 91.5552C70.5474 90.906 70.6753 90.2631 70.9237 89.6634C71.1721 89.0636 71.5363 88.5186 71.9953 88.0595C72.9224 87.1324 74.1798 86.6116 75.491 86.6116C76.1402 86.6116 76.783 86.7395 77.3828 86.9879C77.9825 87.2364 78.5275 87.6005 78.9866 88.0595L85.9778 95.0508L103.53 77.4983C103.989 77.0392 104.534 76.6751 105.134 76.4267C105.734 76.1782 106.377 76.0504 107.026 76.0504C107.675 76.0504 108.318 76.1782 108.918 76.4267C109.518 76.6751 110.063 77.0392 110.522 77.4983C110.981 77.9574 111.345 78.5023 111.593 79.1021C111.842 79.7019 111.969 80.3447 111.969 80.9939C111.969 81.6431 111.842 82.286 111.593 82.8857C111.345 83.4855 110.981 84.0305 110.522 84.4896L89.4982 105.562ZM59.897 99.1662H19.8337C14.3795 99.1662 9.91699 94.7037 9.91699 89.2495V29.7496C9.91699 24.2954 14.3795 19.8329 19.8337 19.8329H99.167C104.621 19.8329 109.084 24.2954 109.084 29.7496V62.8712C103.796 60.3556 97.9568 59.2198 92.1114 59.5697C86.266 59.9196 80.6044 61.7438 75.6543 64.8723C70.7041 68.0007 66.6267 72.3316 63.8021 77.4612C60.9774 82.5908 59.4975 88.352 59.5003 94.2079C59.5003 95.8937 59.6491 97.53 59.897 99.1662ZM56.8724 62.8216C58.4591 63.8133 60.5416 63.8133 62.1282 62.8216L97.1837 40.9058C97.6808 40.6267 98.1162 40.2496 98.4635 39.7974C98.8107 39.3451 99.0626 38.8272 99.2038 38.2748C99.3451 37.7224 99.3727 37.1471 99.2852 36.5837C99.1977 36.0202 98.9967 35.4805 98.6945 34.997C98.3924 34.5135 97.9952 34.0963 97.5271 33.7707C97.0591 33.4452 96.5298 33.218 95.9714 33.1029C95.4129 32.9878 94.837 32.9872 94.2783 33.1011C93.7196 33.2151 93.1899 33.4412 92.7212 33.7658L59.5003 54.5412L26.2795 33.7658C25.8107 33.4412 25.281 33.2151 24.7224 33.1011C24.1637 32.9872 23.5877 32.9878 23.0293 33.1029C22.4709 33.218 21.9416 33.4452 21.4735 33.7707C21.0054 34.0963 20.6083 34.5135 20.3061 34.997C20.0039 35.4805 19.803 36.0202 19.7154 36.5837C19.6279 37.1471 19.6556 37.7224 19.7968 38.2748C19.9381 38.8272 20.19 39.3451 20.5372 39.7974C20.8844 40.2496 21.3198 40.6267 21.817 40.9058L56.8724 62.8216Z"
                  fill="#CDAB00"
                />
              </svg>
            </div>
            <div className="flex justify-center items-center mt-[20px]">
              <Link
                to="/login"
                className="bg-[#CDAB00] hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Reset;
