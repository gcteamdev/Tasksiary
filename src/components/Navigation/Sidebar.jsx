import React from 'react';
import './Sidebar.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InboxIcon from '@mui/icons-material/Inbox';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import PeopleIcon from '@mui/icons-material/People';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import AddBusinessTwoToneIcon from '@mui/icons-material/AddBusinessTwoTone';
import PointOfSaleTwoToneIcon from '@mui/icons-material/PointOfSaleTwoTone';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Logo from '../assets/Sidebar/Group 258.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import WLogo from '../assets/Login/greenLogo.png';

const Sidebar = ({ children }) => {
  const [isOpen, setOpen] = useState(true);
  const toggle = () => setOpen(!isOpen);

  const menuItem = [
    {
      path: '/homepage',
      name: 'Home',
      icon: <HomeOutlinedIcon />,
    },
    {
      path: '/inbox',
      name: 'Inbox',
      icon: <InboxIcon />,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <DashboardOutlinedIcon />,
    },
    {
      path: '/dailyTasks',
      name: 'DailyTasks',
      icon: <TaskOutlinedIcon />,
    },
    {
      path: '/team',
      name: 'Team Members',
      icon: <PeopleIcon />,
    },
    {
      path: '/marketing',
      name: 'Marketing',
      icon: <AddBusinessTwoToneIcon />,
    },
    {
      path: '/sales',
      name: 'Sales',
      icon: <PointOfSaleTwoToneIcon />,
    },
    {
      path: '/hr',
      name: 'HR',
      icon: <Diversity3Icon />,
    },
  ];
  const menuItem2 = [
    {
      path: '/alerts',
      name: 'Alerts',
      icon: <NotificationsOutlinedIcon />,
    },
    {
      path: '/profile',
      name: 'Profile',
      icon: <AccountCircleIcon />,
    },
    {
      path: '',
      name: 'Sign Out',
      icon: <LogoutIcon />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? '200px' : '50px' }} className="sidebar">
        <div className="top_section">
          <div
            style={{ display: isOpen ? 'block' : 'none' }}
            className="logoSide"
          >
            <img className="nav-logo" src={Logo} alt="logo" />
          </div>
          <div style={{ marginLeft: isOpen ? '20px' : '0px' }} className="bars">
            <MenuTwoToneIcon onClick={toggle} />
          </div>
        </div>

        <div className="menu1">
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? 'block' : 'none' }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <div className="Nav-bottom">
         <div className="linebreak"> <hr /></div>
          <div className="menu2">
            {menuItem2.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                activeclassName="active"
              >
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? 'block' : 'none' }}
                  className="link_text"
                >
                  {item.name}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
        <img className="navBottomLogo" src={WLogo} alt="logo" />
      </div>
      <main className="col-12 main"> {children} </main>
    </div>
  );
};

export default Sidebar;
