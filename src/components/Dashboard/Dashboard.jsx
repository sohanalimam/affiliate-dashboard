import React, { useState } from 'react';
import { Dropdown } from 'flowbite-react';
import { DataTable } from '../DataTable/DataTable';
import { DataTableTwo } from '../DataTable/DataTableTwo';
import { Link } from 'react-router-dom';
import CopyToClipboard from '../../Utilities/CopyToClipboard/CopyToClipboard';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}/${month}/${year}`;
}



function Dashboard() {
  const [currentDate, setCurrentDate] = useState(getDate());
  const [open, setOpen] = useState(false);
  const [dorpDown, setDropDown] = useState(false);
  const [value, setValue] = useState('');

  const dropDownMenus = [
    {
      label: "Today's",
      value: 1,
    },
    {
      label: "Yesterday",
      value: 2,
    },
    {
      label: "Tomorrow",
      value: 3,
    },
  ]

  const orderLocations = [
    { city: 'Dhaka', count: 10 },
    { city: 'Khulna', count: 4 },
    { city: 'Barishal', count: 7 },
    { city: 'Feni', count: 3 },
    { city: 'Gopalganj', count: 8 },
    { city: 'Sirajganj', count: 37 },
    { city: 'Madaripur', count: 23 },
  ]
  function handleSelect(event) {
    setValue(event.target.value)
  }

  return (
    <div>
      <p>{currentDate}</p>
      <h1 className='text-3xl'>Hello ViralValy</h1>
      <div>
          <CopyToClipboard/>
        </div>
      <div className='pt-5 grid grid-cols-4 gap-5'>
        <div className='border border-ecomtech rounded-md'>
          <h1 className='p-3 text-xl text-center'>Balance</h1>
          <hr className='border-ecomtech' />
          <div className='p-3'>
            <div className=''>
              <select className='w-full cursor-pointer' onChange={handleSelect}>
                {dropDownMenus.map(dropDownMenu => (<option value={dropDownMenu.value}>{dropDownMenu.label}</option>))}
              </select>
            </div>
            <h1 className='flex items-center justify-center h-28 text-3xl'>৳ 1200</h1>
          </div>
        </div>
        
        <div className='border border-ecomtech rounded-md'>
          <h1 className='p-3 text-xl text-center'>Earning</h1>
          <hr className='border-ecomtech' />
          <div className='p-3'>
            <div className=''>
              <select className='w-full cursor-pointer' onChange={handleSelect}>
                {dropDownMenus.map(dropDownMenu => (<option value={dropDownMenu.value}>{dropDownMenu.label}</option>))}
              </select>
            </div>
            <h1 className='flex items-center justify-center h-28 text-3xl'>৳ 1200</h1>
          </div>
        </div>

        <div className='border border-ecomtech rounded-md'>
          <h1 className='p-3 text-xl text-center'>Sign Up</h1>
          <hr className='border-ecomtech' />
          <div className='p-3'>
            <div className=''>
              <select className='w-full cursor-pointer' onChange={handleSelect}>
                {dropDownMenus.map(dropDownMenu => (<option value={dropDownMenu.value}>{dropDownMenu.label}</option>))}
              </select>
            </div>
            <div className='p-3'>

              <div className='py-3'>
                <div className='flex justify-between'>
                  <p>Link Click</p>
                  <p>10</p>
                </div>
                <div className='flex justify-between'>
                  <p>Sign Up</p>
                  <p>23</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='border border-ecomtech rounded-md'>
          <h1 className='p-3 text-xl text-center'>Subscriber</h1>
          <hr className='border-ecomtech' />
          <div className='p-3'>
            <div className=''>
              <select className='w-full cursor-pointer' onChange={handleSelect}>
                {dropDownMenus.map(dropDownMenu => (<option value={dropDownMenu.value}>{dropDownMenu.label}</option>))}
              </select>
            </div>
            <h1 className='flex items-center justify-center h-28 text-3xl'>23</h1>
          </div>
        </div>
      </div>

      {/* New section start here */}
      <div className='grid grid-cols-2 gap-5 pt-5'>
        <div className='border border-ecomtech rounded-md'>
          <div className='flex divide-x divide-ecomtech justify-between'>
            <h1 className='p-3 text-xl'>Subscriber</h1>
            <h1 className='p-3 cursor-pointer'><u><Link to="/subscription">See All</Link></u></h1>
          </div>
          <hr className='border-ecomtech' />
          <DataTable />
        </div>
        <div className='border border-ecomtech rounded-md'>
          <div className='flex divide-x divide-ecomtech justify-between'>
            <h1 className='p-3 text-xl'>Withdraw</h1>
            <h1 className='p-3 cursor-pointer'><u><Link to="/withdraw">See All</Link></u></h1>
          </div>
          <hr className='border-ecomtech' />
          <DataTableTwo />
        </div>
      </div>
    </div>

  );
}

export default Dashboard;