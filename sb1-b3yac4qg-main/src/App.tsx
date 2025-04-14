import React from 'react';
import { Building } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Dashboard Header */}
      <div className="bg-red-600 p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-3">
            <Building className="h-8 w-8 text-white" />
            <h1 className="text-2xl font-bold text-white">Your Brand</h1>
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-4">
            <a 
              href="/about"
              className="px-6 py-2 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              <span className="text-red-600 font-semibold">About Us</span>
            </a>

            <a 
              href="/services"
              className="px-6 py-2 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              <span className="text-red-600 font-semibold">Services</span>
            </a>

            <a 
              href="/contact"
              className="px-6 py-2 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              <span className="text-red-600 font-semibold">Contact Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-white p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Our Website</h1>
          <p className="text-gray-600">
            This is the main content area of your website. You can add more content here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;