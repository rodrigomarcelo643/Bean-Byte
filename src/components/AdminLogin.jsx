import { FaUserAlt } from "react-icons/fa";
import React, { useState } from "react";
import logo from "../assets/main_logo.png";
import passwordIcon from "../assets/passwordIcon.png";
import loginBg from "../assets/login_bg.png";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function dashboardNavigate() {
    navigate("/Admin");
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        {/* Left side (Login form) */}
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="flex justify-center items-center">
            <img src={logo} className="w-auto" alt="Logo" />
          </div>

          <div className="mt-12 flex flex-col items-center">
            <div className="w-full flex-1">
              <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
                <div className="relative">
                  <input
                    className="w-full px-9.5 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="absolute left-3 top-4">
                    <FaUserAlt className="text-[#724E2C] text-[18px]" />
                  </div>
                </div>

                <div className="relative mt-5">
                  <input
                    className="w-full px-9.5  py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="absolute left-2 top-3">
                    <img src={passwordIcon} alt="Password Icon" />
                  </div>
                </div>

                <button
                  type="submit"
                  onClick={dashboardNavigate}
                  className="mt-5 tracking-wide font-semibold bg-[#b18b68] cursor-pointer text-white-500 w-full py-4 rounded-lg hover:bg-[#724E2C] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <span className="ml-1 text-md text-white">Sign In</span>
                </button>
              </form>

              <div className="mt-4 text-sm text-center">
                <a href="#" className="text-[#b18b68] hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right side (Persuasive Text) */}
        <div
          className="flex-1 bg-green-100 text-center hidden lg:flex relative"
          style={{
            backgroundImage: `url(${loginBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-white px-8 py-6 flex flex-col justify-center items-center">
            <h2 className="text-4xl font-semibold mb-4">
              Welcome Back, Admin!
            </h2>
            <p className="text-lg">
              Log in to access the full control panel and manage all of your
              tasks with ease. Your business, your way—simplified.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
