import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import * as ROUTES from '../constants/routes';
import useSignup from '../hooks/useSignup';

function Signup() {
  const {
    userName,
    setUserName,
    emailAddress,
    setEmailAddress,
    password,
    setPassword,
    userIsVerified,
    emailMessage,
    submitHandler,
    fullName,
    setFullName,
    loading,
  } = useSignup();

  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Sign-up Instagram';
    if (userIsVerified) {
      navigate(ROUTES.DASHBOARD);
    }
  }, [userIsVerified, navigate]);
  return (
    <>
      <Toaster />
      <div className="flex flex-col items-center justify-center h-screen bg-slate-400">
        <div className="w-full max-w-sm px-4 py-8 bg-white shadow-lg rounded-lg shadow-black">
          <div className="text-center">
            <img
              className="mx-auto h-12 w-auto"
              src="./images/logo.png"
              alt="Instagram"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 prose lg:prose-h1:prose">
              Sign in to instagram
            </h2>
          </div>
          {userIsVerified === false && (
            <p className=" text-center my-4 text-sm text-red-500">
              {emailMessage}
            </p>
          )}
          <form className="mt-8 space-y-6" onSubmit={submitHandler}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2 ml-4"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  value={userName}
                  required
                  placeholder="Enter username"
                  className="input input-bordered input-primary w-full max-w-xs appearance-none relative block px-3 py-2focus:z-10 sm:text-sm my-2 mx-3"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2 ml-4"
                  htmlFor="fullname"
                >
                  Fullname
                </label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  autoComplete="fullname"
                  value={fullName}
                  required
                  placeholder="Enter Your Fullname"
                  className="input input-bordered input-primary w-full max-w-xs appearance-none relative block px-3 py-2focus:z-10 sm:text-sm my-2 mx-3"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2 ml-4"
                  htmlFor="email-address"
                >
                  Email
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  value={emailAddress}
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Email address"
                  className="input input-bordered input-primary w-full max-w-xs appearance-none relative block px-3 py-2focus:z-10 sm:text-sm my-2 mx-3"
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2 ml-4"
                  htmlFor="email-address"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  autoComplete="current-password"
                  required
                  placeholder="Type your Password here"
                  className="input input-bordered input-primary w-full max-w-xs appearance-none relative block px-3 py-2  focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-2 mx-3"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 font-medium text-white uppercase bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex mr-3 justify-center items-center"
                disabled={loading}
              >
                {loading && (
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25 stroke-white"
                      cx="12"
                      cy="12"
                      r="10"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75 fill-white"
                      d="M4 12a8 8 0 018-8V0c-4.418 0-8 3.582-8 8zm0 0a8 8 0 018 8v4c-4.418 0-8-3.582-8-8zm12 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                )}
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </div>
          </form>
          <p className="text-gray-700 my-5 text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 font-bold">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
