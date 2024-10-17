import React from 'react';
import { PiStorefrontThin, PiHandWithdrawThin } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";
import { FiBarChart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  {
    url: '/',
    name: 'Dashboard',
    icon: <RxDashboard/>
  },
  {
    url: '/subscription',
    name: 'Subscription',
    icon: <FiBarChart/>
  },
  {
    url: '/withdraw',
    name: 'Withdraw',
    icon: <PiHandWithdrawThin/>
  },
  {
    url: '/profile',
    name: 'Profile',
    icon: <AiOutlineUser/>
  },
  {
    url: '/loginandsignup',
    name: 'LoginAndSignUp',
    icon: <AiOutlineUser/>
  }
]


const SideNavbar = () => {
  const location = useLocation();
  
  return (
    <div className='overflow-y-auto h-[calc(100vh-80px)] hide-scrollbar'> 
      {
        navItems.map((navItem, index) => (
          <Link className={`flex items-center hover:text-ecomtech gap-2 text-xl ps-5 p-2 mt-1 cursor-pointer ${location.pathname == navItem.url && 'bg-white'}`} to={navItem.url}> <span>{navItem.icon}</span> <span>{navItem.name}</span> </Link>
        ))
      }
      <Link className='flex items-center gap-2 text-xl ps-5 p-2 mt-1 cursor-pointer absolute inset-x-0 bottom-0 hover:bg-[#FF0000] hover:text-white'><span><IoIosLogOut/></span><span>Log Out</span></Link>
    </div>
  );
};

export default SideNavbar;