/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
import * as ROUTES from '../constants/routes';

function Login() {
  const navigate = useNavigate();
  const {
    emailAddress,
    userExist,
    setEmailAddress,
    password,
    setPassword,
    error,
    handleLogin,
    isInvalid,
  } = useLogin();

  useEffect(() => {
    document.title = 'Login-Instagram';
    if (userExist) {
      navigate(ROUTES.DASHBOARD);
    }
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-700">
      <div className="w-full max-w-sm px-4 py-8 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <img
            className="mx-auto h-12 w-auto"
            src="./images/logo.png"
            alt="Instagram"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900  prose lg:prose-h1:prose">
            Log in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{' '}
            <Link
              to="/signup"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              sign up for an account
            </Link>
          </p>
        </div>
        {error && (
          <p className=" text-center my-4 text-sm text-red-500">{error}</p>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                placeholder="Email address"
                value={emailAddress}
                className="input input-bordered input-primary w-full max-w-xs appearance-none relative block px-3 py-2focus:z-10 sm:text-sm my-2 mx-3"
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </div>
            <div>
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

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                to="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={`w-full py-2 mt-6 font-medium text-white uppercase bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                isInvalid && 'opacity-50'
              }`}
              disabled={isInvalid}
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
