import React from 'react';
import SideBar from './SideBar';
import MainContent from './MainContent';
import { Routes, Route } from 'react-router-dom';
import Explore from './Explore';
import DaHome from './pages/DaHome';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Search from './pages/Search';
import History from './pages/History';

const Dashboard = () => {
  return (
    <div className="dashboard flex flex-row  h-screen">
      <SideBar className="w-1/4 text-white " />
      <div className="flex-1">
        <Routes>
          <Route index element={<MainContent />} />
          <Route path="explore" element={<Explore />} />
          <Route path="home" element={<DaHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="search" element={<Search />} />
          <Route path="history" element={<History />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;