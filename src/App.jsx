import React from 'react';
import { FiHome, FiBell, FiSettings, FiUser, FiBarChart2 } from 'react-icons/fi'; // Import icons
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { BsGraphUpArrow } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { MdDashboard } from 'react-icons/md';
import { FaArrowUp } from "react-icons/fa";

const GraphWithQuestion = ({ question }) => {
  return (
    <div className="bg-gray-200 flex items-center rounded-lg py-3">
      <div className='ml-10'>
      <BsGraphUpArrow style={{  fontSize: '14px' }} />
      </div>
      
      <div className="ml-2 font-bold">{question}</div>
    </div>
  );
};
function App() {
  return (
    <div className="text-black bg-gray-50">
      <div className="h-screen flex">
      {/* Sidebar */}
      <div className="bg-gray-100 text-gray-100 w-64 flex flex-col my-20 ml-10 rounded-3xl border-1 border-black shadow">
      {/* Main Heading */}
      <div className="px-6 text-blue-600 text-lg font-semibold pt-4">TeleKinectAI</div>
      {/* Mini Heading */}
      <div className='flex absolute pl-52 pt-4'>
        <IoIosArrowDropleftCircle style={{ color: 'blue', fontSize: '48px' }} />
      </div>
      <div className="px-6 text-sm text-gray-500">AI Based Telematics</div>
      {/* Options */}
      <ul className="mt-6">
        <li className="flex items-center px-8 py-2 text-gray-500 cursor-pointer">
          <FiHome className="mr-4" /> Home
        </li>
        <li className="flex items-center px-8 py-2 text-gray-500 cursor-pointer">
          <MdDashboard className="mr-4" /> Dashboard
        </li>
        <li className="flex items-center px-8 py-2 text-blue-600 cursor-pointer font-semibold">
          <FiBarChart2 className="mr-4" /> KinectMind
        </li>
        <li className="flex items-center px-8 py-2 text-gray-500 cursor-pointer">
          <FiBell className="mr-4" /> Notifications
        </li>
        <li className="flex items-center px-8 py-2 text-gray-500 cursor-pointer">
          <FiSettings className="mr-4" /> Settings
        </li>
        <li className="flex items-center px-8 py-2 text-gray-500 cursor-pointer">
          <FiUser className="mr-4" /> Profile
        </li>
        <li className="flex items-center px-8 py-2 text-gray-500 cursor-pointer">
          <FiBell className="mr-4" /> Plans
        </li>
        {/* Logout Option */}
        
      </ul>
      <div className='flex absolute bottom-0 pb-24'>
       <div className="flex items-center px-8 py-2 text-gray-500 cursor-pointer">
          <HiOutlineLogout className="mr-4" /> Logout
        </div> 
      </div>
      
    </div>
      {/* Main Content */}
      <div className="flex-grow bg-gray-50 my-20 ml-10 mr-5">
        <div className='top nav flex justify-between'>
        <div className='font-bold text-3xl pt-2'>KinectMind</div>
        <div className='flex flex-row'>
        <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center">
        <span className="text-white text-sm font-bold">SB</span>
      </div>
          <div className='pl-1'>
            <div className='font-bold'>
              Sumit Bank
            </div>
            <div>
              it.consulting@powertrackafrica.com
            </div>
          </div>
        </div>
        </div>
        <div className="py-64 px-72">
          <div className='text-center font-bold text-3xl'>
            How may I help you?
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4 mx-4">
        <GraphWithQuestion question="How many drivers drove on 12th march?" />
        <GraphWithQuestion question="How can natural language processing (NLP)?" />
        <GraphWithQuestion question="What are the ethical implications of using AI in autonomous?" />
        <GraphWithQuestion question="How can artificial intelligence be used to improve healthcare?" />
      </div>
        </div>
        <div className="footer pt-12">
        <div className="flex justify-between items-center ">
      <input
        type="text"
        placeholder="Type your message here..."
        className="flex-1 px-4 py-2 mr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <button
        type="button"
        className="bg-blue-500 text-white px-3 py-3 rounded-xl hover:bg-blue-600 focus:outline-none"
      >
        <FaArrowUp color='blue'/>
      </button>
    </div>
        
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
