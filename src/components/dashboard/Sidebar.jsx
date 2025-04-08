import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, UserCircleIcon, Cog6ToothIcon, GlobeAltIcon, ClockIcon, Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleBurgerClick = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col h-screen bg-gray-800 text-white shadow-md ">
      {/* Burger Menu (Visible on sm and md screens) */}
      <div onClick={handleBurgerClick} className="lg:hidden cursor-pointer p-4">
        <Bars3Icon className="w-8 h-8 text-gray-300" />
      </div>

      {/* Dropdown Menu (Visible when burger is clicked, icons only) */}
      {isOpen && (
        <ul className="mt-2 bg-gray-700 rounded-lg p-2 lg:hidden ">
          <li className=''>
            <NavLink
              to="/dashboard/home"
              className="flex items-center justify-center px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              <HomeIcon className="w-6 h-6 text-gray-300" />
            </NavLink>
          </li>
          <li className=''>
            <NavLink
              to="/dashboard/search"
              className="flex items-center justify-center px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-300" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/profile"
              className="flex items-center justify-center px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              <UserCircleIcon className="w-6 h-6 text-gray-300" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/explore"
              className="flex items-center justify-center px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              <GlobeAltIcon className="w-6 h-6 text-gray-300" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/history"
              className="flex items-center justify-center px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              <ClockIcon className="w-6 h-6 text-gray-300" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/settings"
              className="flex items-center justify-center px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              <Cog6ToothIcon className="w-6 h-6 text-gray-300" />
            </NavLink>
          </li>
        </ul>
      )}

      {/* Sidebar Links (Visible on lg and above screens) */}
      <div className="hidden lg:flex flex-col gap-6 mt-6 p-4">
        <NavLink
          to="/dashboard/home"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-2 rounded-lg ${
              isActive ? 'bg-gray-700' : 'hover:bg-gray-600'
            }`
          }
        >
          <HomeIcon className="w-6 h-6" />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/dashboard/search"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-2 rounded-lg ${
              isActive ? 'bg-gray-700' : 'hover:bg-gray-600'
            }`
          }
        >
          <HomeIcon className="w-6 h-6" />
          <span>Search</span>
        </NavLink>

        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-2 rounded-lg ${
              isActive ? 'bg-gray-700' : 'hover:bg-gray-600'
            }`
          }
        >
          <UserCircleIcon className="w-6 h-6" />
          <span>Profile</span>
        </NavLink>

        <NavLink
          to="/dashboard/explore"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-2 rounded-lg ${
              isActive ? 'bg-gray-700' : 'hover:bg-gray-600'
            }`
          }
        >
          <GlobeAltIcon className="w-6 h-6" />
          <span>Explore</span>
        </NavLink>

        <NavLink
          to="/dashboard/history"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-2 rounded-lg ${
              isActive ? 'bg-gray-700' : 'hover:bg-gray-600'
            }`
          }
        >
          <ClockIcon className="w-6 h-6" />
          <span>History</span>
        </NavLink>

        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-2 rounded-lg ${
              isActive ? 'bg-gray-700' : 'hover:bg-gray-600'
            }`
          }
        >
          <Cog6ToothIcon className="w-6 h-6" />
          <span>Settings</span>
        </NavLink>
      </div>

      {/* Logout Button (Visible on lg and above screens) */}
      <div className="hidden lg:flex justify-center mt-auto p-4">
        <button className="flex items-center gap-4 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium">
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;