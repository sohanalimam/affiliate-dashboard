import { Link, Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import { useState } from 'react';
import SideNavbar from './components/SideNavbar/SideNavbar';
import { AiOutlineMenu, AiOutlineCloseCircle, AiOutlineShoppingCart, AiOutlineUser, AiOutlineBell } from "react-icons/ai";
import Logo from './assets/Desktop White Normal Logo.png'
import Footer from './components/Footer/Footer';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className=''>
      <div className={`bg-gray-200 ${open ? 'fixed' : 'hidden'}`}>
        <div className='sticky top-0 h-20 w-full bg-gray-200'>
          <div className='flex justify-end' onClick={() => setOpen(!open)}>
            {
              open == true ? (<AiOutlineCloseCircle className='cursor-pointer text-2xl' />) : ''
            }
          </div>
          <div className='flex justify-center'>
            <Link to='/'><img className='' src={Logo} alt="logo" srcset="" width={200} height={50} /></Link>
            
          </div>
        </div>
        <SideNavbar />
      </div>
      <div className={`${open ? 'ml-[200px]' : ''}`}>
        <Header setOpen={setOpen} open={open} />
        <div className='px-10 mx-auto mt-5'>
          <Outlet />
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App
