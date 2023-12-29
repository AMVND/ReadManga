import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="text-white">
          <a href="/" className="text-xl font-bold">
            Your Logo
          </a>
        </div>

        {/* Tabs on the right */}
        <div className="flex space-x-4">
          <a href="/" className="text-white">Home</a>
          <a href="/signin" className="text-white">About</a>
          <a href="/signup" className="text-white">SignUp</a>
          {/* Add more tabs as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
