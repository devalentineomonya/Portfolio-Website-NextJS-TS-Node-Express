import React from 'react';

const page: React.FC = () => {
  return (
    <div className="w-full min-h-screen m-0 p-0 bg-gradient-to-br from-primary via-dark-secondary to-dark-primar flex justify-center items-center">
      <div className="w-full max-w-md p-10 text-center bg-cover bg-center bg-no-repeat rounded-md shadow-lg"
      >
        <h1 className="text-white font-bold text-5xl tracking-wider leading-none mb-5 text-shadow-md">
          OFFLINE
        </h1>
        <h4 className="text-gray-300 font-light text-base">
          Please check your internet connection
        </h4>
        <a
          href="."
          className="inline-block mt-5 py-4 px-8 bg-[#22254C] text-white tracking-wider rounded-md shadow-md"
        >
          RETRY
        </a>
      </div>
    </div>
  );
};

export default page;
