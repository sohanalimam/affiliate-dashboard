import React, { useState } from 'react';
import { AiOutlineBell } from 'react-icons/ai';

const initialNotifications = [
  { id: 1, type: 'withdraw', amount: '৳ 5000', time: '2 minutes ago' },
  { id: 2, type: 'subscriber', count: 10, time: '5 minutes ago' },
  { id: 3, type: 'linkClick', count: 15, time: '30 minutes ago' },
  { id: 4, type: 'signUp', count: 3, time: '1 hour ago' },
  { id: 5, type: 'withdraw', amount: '৳ 2000', time: '2 hours ago' },
  { id: 6, type: 'subscriber', count: 5, time: '3 hours ago' },
  { id: 7, type: 'linkClick', count: 8, time: '4 hours ago' },
  { id: 8, type: 'signUp', count: 12, time: '5 hours ago' },
  { id: 9, type: 'withdraw', amount: '৳ 3000', time: '6 hours ago' },
  { id: 10, type: 'subscriber', count: 7, time: '7 hours ago' },
  { id: 11, type: 'linkClick', count: 20, time: '8 hours ago' },
  { id: 12, type: 'signUp', count: 5, time: '9 hours ago' },
];

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const renderNotificationMessage = (notification) => {
    switch (notification.type) {
      case 'withdraw':
        return `Withdrawn Amount: ${notification.amount}`;
      case 'subscriber':
        return `${notification.count} New Subscribers`;
      case 'linkClick':
        return `${notification.count} Link Clicks`;
      case 'signUp':
        return `${notification.count} New Sign-Ups`;
      default:
        return '';
    }
  };

  return (
    <div className='relative'>
      {/* Notification Bell */}
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer relative'>
        <AiOutlineBell className='text-2xl' />
        {/* Notification Badge */}
        <span className='absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-red-500 rounded-full'></span>
      </div>

      {/* Notification Dropdown */}
      {isOpen && (
        <div className='absolute left-[-250px] mt-2 w-80 bg-white shadow-lg rounded-lg z-50 md:w-96'>
          <div className='p-4 font-bold text-center border-b'>Notifications</div>
          <ul className='max-h-60 overflow-y-auto hide-scrollbar'>
            {initialNotifications.slice(0, showMore ? initialNotifications.length : 10).map((notification) => (
              <li key={notification.id} className='p-3 hover:bg-gray-100 cursor-pointer'>
                <p className='text-sm'>{renderNotificationMessage(notification)}</p>
                <p className='text-xs text-gray-400'>{notification.time}</p>
              </li>
            ))}
          </ul>
          {/* Show More Notifications Button */}
          {!showMore && initialNotifications.length > 10 && (
            <div
              onClick={() => setShowMore(true)}
              className='p-3 text-center text-blue-500 cursor-pointer hover:underline'>
              See more notifications
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Notification;
