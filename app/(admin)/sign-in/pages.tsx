import React from "react";

const pages = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <div className="bg-white shadow-md rounded-md ">
        <form>
          <div className="w-full flex flex-col items-start gap-y-4">
            <label htmlFor="email">Email</label>
            <input
              className="w-full min-h-8 rounded border-gray-100 bg-gray-50"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              id="email"
              required
            />
          </div>
          <div className="w-full flex flex-col items-start gap-y-4">
            <label htmlFor="password">Password</label>
            <input
              className="w-full min-h-8 rounded border-gray-100 bg-gray-50"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              id="password"
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default pages;
