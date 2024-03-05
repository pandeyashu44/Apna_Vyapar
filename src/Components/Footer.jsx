import React from 'react';

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-6 display-fixed">
      <div className='h-20 w-30 justify-center flex float-'>
          <img src="../../src/assets/Images/Footerlogo.png" alt="" />
          </div>
      <div className="container mx-auto flex justify-center font-mono">
        <div className="flex space-x-20">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <a href="/" className="block mb-2 hover:text-gray-300">Who we are</a>
            <a href="/" className="block mb-2 hover:text-gray-300">What we do</a>
            <a href="/" className="block mb-2 hover:text-gray-300">Our team</a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <a href="/" className="block mb-2 hover:text-gray-300">Blogs</a>
            <a href="/" className="block mb-2 hover:text-gray-300">Founders</a>
            <a href="/" className="block mb-2 hover:text-gray-300">Help</a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <a href="/" className="block mb-2 hover:text-gray-300">Our Vision</a>
            <a href="/" className="block mb-2 hover:text-gray-300">Our Services</a>
            <a href="/" className="block mb-2 hover:text-gray-300">Headquarters</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
