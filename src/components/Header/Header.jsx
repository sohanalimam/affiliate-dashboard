import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineCloseCircle, AiOutlineShoppingCart, AiOutlineUser, AiOutlineBell } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';
import Notification from '../../Utilities/Notifications/Notifications';

export default function Header({ open, setOpen }) {

  return (
    <div>
      <div className=''>
        <div className={`h-16 sticky top-0 shadow-md`}>
          <div className='h-full flex w-11/12 justify-between items-center px-10'>
            <div onClick={() => setOpen(!open)}>
              {
                open == true ? '' : (<AiOutlineMenu className='cursor-pointer text-2xl' />)
              }
            </div>
            <div className='flex w-1/12 absolute inset-y-0 right-10 justify-evenly items-center'>
              <Notification/>
              <Link to="/profile"><AiOutlineUser className='cursor-pointer text-2xl' /></Link>
              <Link to="/"><IoIosLogOut className='cursor-pointer text-2xl' /></Link>
              

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
