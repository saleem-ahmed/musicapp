import React, { useState } from "react";
import Navbar from "../Component/header";
import { Link } from "react-router-dom";
import { Stepper } from "../Component/stepper";

const SignUpForm = ({ onNext }) => (
  <div className="h-[80vh] w-full flex justify-center items-center">
    <div className="bg-white p-9 rounded-lg shadow-lg w-full max-w-[500px] w-full flex flex-col">
      <h2 className="font-sans text-2xl font-bold leading-8 text-[#000000CC] mb-4">
        Sign Up
      </h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email*
          </label>
          <input
            className="shadow appearance-none bg-[linear-gradient(0deg, #D2D2D1, #D2D2D1)] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email address"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password*
          </label>
          <input
            className="shadow appearance-none bg-[linear-gradient(0deg, #D2D2D1, #D2D2D1)] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="**********"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="repeat-password"
          >
            Repeat Password*
          </label>
          <input
            className="shadow appearance-none bg-[linear-gradient(0deg, #D2D2D1, #D2D2D1)] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="repeat-password"
            type="password"
            placeholder="**********"
          />
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">
              Agree to our terms of service
            </span>
          </label>
        </div>
        <div className="flex justify-between items-center">
          <button
            type="button"
            className="bg-[#CDAB00] hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={onNext}
          >
            Next
          </button>
          <Link to="/login" className="text-[#CDAB00] hover:text-yellow-700">
            Login
          </Link>
        </div>
      </form>
    </div>
  </div>
);

const startYear = 1990;
const endYear = 2030;
const years = [];

for (let year = startYear; year <= endYear; year++) {
  years.push(year);
}

const ConfirmationForm = () => (
  <div className="bg-white p-9 rounded-lg shadow-lg w-full max-w-[800px] flex flex-col">
    <div className="relative">
      <h2 className="font-sans text-2xl font-bold leading-8 text-[#000000CC] border-b border-[#AAAAAA]  mb-4 pb-2">
        Edit Bio
      </h2>
      <Link to="/">
        <svg
          className="absolute right-[20px] top-0"
          style={{ cursor: "pointer" }}
          width="43"
          height="40"
          viewBox="0 0 43 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="21.5399" cy="20" rx="21.4598" ry="20" fill="#FAFAFA" />
          <path
            d="M21.5416 20L26.2297 24.3692M16.8535 24.3692L21.5416 20L16.8535 24.3692ZM26.2297 15.6309L21.5407 20L26.2297 15.6309ZM21.5407 20L16.8535 15.6309L21.5407 20Z"
            stroke="#5D5F63"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Link>
    </div>
    <div className="w-full max-w-[680px]">
      <h3 className="font-sans text-[20px] font-bold leading-8 text-[#000000] mb-4">
        About Info
      </h3>

      <form className="w-[90%]">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstname"
          >
            First Name
          </label>
          <input
            className="shadow appearance-none bg-[linear-gradient(0deg, #D2D2D1, #D2D2D1)] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstname"
            type="text"
            placeholder="Your first name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Last Name
          </label>
          <input
            className="shadow appearance-none bg-[linear-gradient(0deg, #D2D2D1, #D2D2D1)] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastname"
            type="text"
            placeholder="Your last name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Last Name
          </label>
          <input
            className="shadow appearance-none bg-[linear-gradient(0deg, #D2D2D1, #D2D2D1)] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Your user name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="city"
          >
            City
          </label>
          <input
            className="shadow appearance-none bg-[linear-gradient(0deg, #D2D2D1, #D2D2D1)] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            placeholder="City name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="State"
          >
            State
          </label>
          <input
            className="shadow appearance-none bg-[linear-gradient(0deg, #D2D2D1, #D2D2D1)] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="State"
            type="text"
            placeholder="State name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="State"
          >
            Date of birth
          </label>
          <div className="flex gap-[10px] w-[80%]">
            <select
              name=""
              id=""
              className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <select
              name="month"
              id="month"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>

            <select
              name="day"
              id="day"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Day</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
          </div>
        </div>
      </form>
      <div className="mb-4 flex justify-between">
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">
              Make my date of birth public
            </span>
          </label>
        </div>

        <Link
          to="/login"
          className="bg-[#CDAB00] hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save
        </Link>
      </div>
    </div>
    <div style={{ boxShadow: "0px 10px 20px 0px #7090B01F" }}>
      <h2 className="text-[20px] text-[#000000] py-[12px] px-[30px] font-semibold">
        Bio
      </h2>
    </div>
    <div className="mt-2" style={{ boxShadow: "0px 10px 20px 0px #7090B01F" }}>
      <h2 className="text-[20px] text-[#000000] py-[12px] px-[30px] font-semibold">
        Image
      </h2>
    </div>
  </div>
);

const steps = [
  { title: "Sign Up", content: <SignUpForm /> },
  { title: "Confirmation", content: <ConfirmationForm /> },
];

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="bg-[url(assets/mainbg.png)] h-full bg-cover bg-no-repeat">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-[100%]">
        <div className="w-full flex flex-col justify-center items-center ">
          <Stepper steps={steps} currentStep={currentStep} />
          {React.cloneElement(steps[currentStep].content, { onNext: nextStep })}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
