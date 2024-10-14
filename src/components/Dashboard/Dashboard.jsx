import React, { useState } from 'react';
import { DataTable } from '../DataTable/DataTable';
import { DataTableTwo } from '../DataTable/DataTableTwo';
import { Link } from 'react-router-dom';
import CopyToClipboard from '../../Utilities/CopyToClipboard/CopyToClipboard';
import WithdrawModal from '../WithdrawModal/WithdrawModal';
import { FaBalanceScale, FaCoins, FaUserPlus, FaUsers } from 'react-icons/fa';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}/${month}/${year}`;
}

function Dashboard() {
  const [currentDate] = useState(getDate());
  const [open, setOpen] = useState(false);

  // Separate state for each card
  const [earningValue, setEarningValue] = useState('৳ 5000');
  const [signUpData, setSignUpData] = useState({ linkClicks: 10, signUps: 23 });
  const [subscriberValue, setSubscriberValue] = useState('23');

  const dropDownMenus = [
    { label: 'All', earning: '৳ 5000', linkClicks: 10, signUps: 23, subscribers: '23' },
    { label: 'Today', earning: '৳ 1200', linkClicks: 3, signUps: 5, subscribers: '3' },
    { label: 'Yesterday', earning: '৳ 1100', linkClicks: 5, signUps: 7, subscribers: '5' },
    { label: 'This Month', earning: '৳ 15000', linkClicks: 50, signUps: 100, subscribers: '50' },
    { label: 'Last Month', earning: '৳ 14000', linkClicks: 40, signUps: 80, subscribers: '40' },
  ];

  const handleSelectEarning = (event) => {
    const selectedOption = dropDownMenus.find(
      (dropDownMenu) => dropDownMenu.label === event.target.value
    );
    setEarningValue(selectedOption ? selectedOption.earning : '৳ 5000');
  };

  const handleSelectSignUp = (event) => {
    const selectedOption = dropDownMenus.find(
      (dropDownMenu) => dropDownMenu.label === event.target.value
    );
    if (selectedOption) {
      setSignUpData({
        linkClicks: selectedOption.linkClicks,
        signUps: selectedOption.signUps,
      });
    }
  };

  const handleSelectSubscriber = (event) => {
    const selectedOption = dropDownMenus.find(
      (dropDownMenu) => dropDownMenu.label === event.target.value
    );
    setSubscriberValue(selectedOption ? selectedOption.subscribers : '23');
  };

  return (
    <div className='p-4 md:p-8'>
      <p>{currentDate}</p>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Hello ViralValy</h1>

      <div className='mt-4'>
        <CopyToClipboard />
      </div>

      {/* Responsive Grid for Cards */}
      <div className='pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
        {/* Balance Card */}
        <div className='border border-ecomtech rounded-md'>
          <h1 className='p-3 text-lg md:text-xl text-center flex items-center justify-center'>
            <FaBalanceScale className="mr-2" /> Balance
          </h1>
          <hr className='border-ecomtech' />
          <div className='p-3'>
            <button onClick={() => setOpen(true)} className="w-full bg-ecomtech text-white py-2 rounded-md">
              Withdraw
            </button>
            <h1 className='flex items-center justify-center h-28 text-2xl md:text-3xl'>৳ 1200</h1>
          </div>
        </div>

        {/* Earning Card */}
        <div className='border border-ecomtech rounded-md'>
          <h1 className='p-3 text-lg md:text-xl text-center flex items-center justify-center'>
            <FaCoins className="mr-2" /> Earning
          </h1>
          <hr className='border-ecomtech' />
          <div className='p-3'>
            <div>
              <select className='w-full cursor-pointer' onChange={handleSelectEarning}>
                {dropDownMenus.map((dropDownMenu, index) => (
                  <option key={index} value={dropDownMenu.label}>
                    {dropDownMenu.label}
                  </option>
                ))}
              </select>
            </div>
            <h1 className='flex items-center justify-center h-28 text-2xl md:text-3xl'>
              {earningValue}
            </h1>
          </div>
        </div>

        {/* Sign Up Card */}
        <div className='border border-ecomtech rounded-md'>
          <h1 className='p-3 text-lg md:text-xl text-center flex items-center justify-center'>
            <FaUserPlus className="mr-2" /> Sign Up
          </h1>
          <hr className='border-ecomtech' />
          <div className='p-3'>
            <div>
              <select className='w-full cursor-pointer' onChange={handleSelectSignUp}>
                {dropDownMenus.map((dropDownMenu, index) => (
                  <option key={index} value={dropDownMenu.label}>
                    {dropDownMenu.label}
                  </option>
                ))}
              </select>
            </div>
            <div className='p-3'>
              <div className='py-3'>
                <div className='flex justify-between'>
                  <p>Link Click</p>
                  <p>{signUpData.linkClicks}</p>
                </div>
                <div className='flex justify-between'>
                  <p>Sign Up</p>
                  <p>{signUpData.signUps}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subscriber Card */}
        <div className='border border-ecomtech rounded-md'>
          <h1 className='p-3 text-lg md:text-xl text-center flex items-center justify-center'>
            <FaUsers className="mr-2" /> Subscriber
          </h1>
          <hr className='border-ecomtech' />
          <div className='p-3'>
            <div>
              <select className='w-full cursor-pointer' onChange={handleSelectSubscriber}>
                {dropDownMenus.map((dropDownMenu, index) => (
                  <option key={index} value={dropDownMenu.label}>
                    {dropDownMenu.label}
                  </option>
                ))}
              </select>
            </div>
            <h1 className='flex items-center justify-center h-28 text-2xl md:text-3xl'>
              {subscriberValue}
            </h1>
          </div>
        </div>
      </div>

      {/* Data Tables Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pt-5'>
        <div className='border border-ecomtech rounded-md'>
          <div className='flex divide-x divide-ecomtech justify-between'>
            <h1 className='p-3 text-lg md:text-xl'>Subscriber</h1>
            <h1 className='p-3 cursor-pointer'><u><Link to="/subscription">See All</Link></u></h1>
          </div>
          <hr className='border-ecomtech' />
          <DataTable />
        </div>

        <div className='border border-ecomtech rounded-md'>
          <div className='flex divide-x divide-ecomtech justify-between'>
            <h1 className='p-3 text-lg md:text-xl'>Withdraw</h1>
            <h1 className='p-3 cursor-pointer'><u><Link to="/withdraw">See All</Link></u></h1>
          </div>
          <hr className='border-ecomtech' />
          <DataTableTwo />
        </div>
      </div>

      {/* Withdraw Modal */}
      {open && <WithdrawModal isOpen={open} onClose={() => setOpen(false)} />}
    </div>
  );
}

export default Dashboard;
