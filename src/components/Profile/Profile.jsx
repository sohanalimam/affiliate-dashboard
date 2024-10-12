import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Profile = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Bank');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [branch, setBranch] = useState('');
  const [routingNumber, setRoutingNumber] = useState('');
  const [accountType, setAccountType] = useState('Personal');
  const [profileImage, setProfileImage] = useState(null);

  // State to manage visibility of password fields
  const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  // State to manage edit mode and saved data
  const [isEditing, setIsEditing] = useState(true);
  const [savedData, setSavedData] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setProfileImage(imageUrl);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !phone || !email) {
      alert("Please fill in all required fields.");
      return;
    }

    if (newPassword && newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    // Save the filled data
    const userData = {
      name,
      phone,
      email,
      paymentMethod,
      bankDetails: paymentMethod === 'Bank' ? { bankName, accountNumber, branch, routingNumber } : null,
      accountNumber: ['bKash', 'uCash', 'Nagad', 'Rocket'].includes(paymentMethod) ? accountNumber : null,
      accountType: ['bKash', 'uCash', 'Nagad', 'Rocket'].includes(paymentMethod) ? accountType : null,
      profileImage,
    };

    setSavedData(userData);
    setIsEditing(false); // Switch to display mode
  };

  return (
    <div className="border border-ecomtech rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-6">{isEditing ? 'Edit Profile' : 'Profile Information'}</h2>
      {isEditing ? (
        <form onSubmit={handleSave} className="space-y-4">
          {/* Profile Image Upload */}
          <div className="flex flex-col items-center mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Profile Image:</label>
            <div className="relative">
              <img 
                src={profileImage || 'https://via.placeholder.com/150'} 
                alt="Profile" 
                className="w-32 h-32 rounded-full border-2 border-gray-300 object-cover mb-2" 
              />
              <input 
                type="file" 
                accept="image/*"
                onChange={handleImageChange} 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
              />
            </div>
          </div>
          
          {/* Personal Information */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Name:</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)} 
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Phone Number:</label>
            <input 
              type="tel" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)} 
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Email:</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password Fields */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Current Password:</label>
            <div className="relative">
              <input 
                type={isCurrentPasswordVisible ? 'text' : 'password'} 
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)} 
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button 
                type="button" 
                onClick={() => setIsCurrentPasswordVisible(!isCurrentPasswordVisible)} 
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
              >
                {isCurrentPasswordVisible ? (
                  <FaEyeSlash className="h-5 w-5" />
                ) : (
                  <FaEye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">New Password:</label>
            <div className="relative">
              <input 
                type={isNewPasswordVisible ? 'text' : 'password'} 
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)} 
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button 
                type="button" 
                onClick={() => setIsNewPasswordVisible(!isNewPasswordVisible)} 
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
              >
                {isNewPasswordVisible ? (
                  <FaEyeSlash className="h-5 w-5" />
                ) : (
                  <FaEye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Confirm New Password:</label>
            <div className="relative">
              <input 
                type={isConfirmPasswordVisible ? 'text' : 'password'} 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} 
                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button 
                type="button" 
                onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)} 
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
              >
                {isConfirmPasswordVisible ? (
                  <FaEyeSlash className="h-5 w-5" />
                ) : (
                  <FaEye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Payment Method:</label>
            <select 
              value={paymentMethod} 
              onChange={(e) => setPaymentMethod(e.target.value)} 
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="Bank">Bank</option>
              <option value="bKash">bKash</option>
              <option value="Nagad">Nagad</option>
              <option value="uCash">uCash</option>
              <option value="Rocket">Rocket</option>
            </select>
          </div>

          {/* Conditional Rendering based on Payment Method */}
          {paymentMethod === 'Bank' ? (
            <>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">Bank Name:</label>
                <input 
                  type="text" 
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)} 
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">Account Number:</label>
                <input 
                  type="text" 
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)} 
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">Branch:</label>
                <input 
                  type="text" 
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)} 
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">Routing Number:</label>
                <input 
                  type="text" 
                  value={routingNumber}
                  onChange={(e) => setRoutingNumber(e.target.value)} 
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </>
          ) : null}

          {/* For bKash, uCash, Nagad, Rocket - Show Account Number and Account Type */}
          {['bKash', 'uCash', 'Nagad', 'Rocket'].includes(paymentMethod) && (
            <>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">Account Number:</label>
                <input 
                  type="text" 
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)} 
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-1">Account Type:</label>
                <select 
                  value={accountType} 
                  onChange={(e) => setAccountType(e.target.value)} 
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="Personal">Personal</option>
                  <option value="Agent">Agent</option>
                </select>
              </div>
            </>
          )}

          {/* Save Button */}
          <div className="flex justify-end mt-4">
            <button 
              type="submit" 
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        // Display saved data
        <div>
          <img 
            src={savedData?.profileImage || 'https://via.placeholder.com/150'} 
            alt="Profile" 
            className="w-32 h-32 rounded-full mb-4"
          />
          <p><strong>Name:</strong> {savedData?.name}</p>
          <p><strong>Phone Number:</strong> {savedData?.phone}</p>
          <p><strong>Email:</strong> {savedData?.email}</p>
          <p><strong>Payment Method:</strong> {savedData?.paymentMethod}</p>
          {savedData?.bankDetails && (
            <>
              <p><strong>Bank Name:</strong> {savedData.bankDetails.bankName}</p>
              <p><strong>Account Number:</strong> {savedData.bankDetails.accountNumber}</p>
              <p><strong>Branch:</strong> {savedData.bankDetails.branch}</p>
              <p><strong>Routing Number:</strong> {savedData.bankDetails.routingNumber}</p>
            </>
          )}
          {savedData?.accountNumber && (
            <p><strong>Account Number:</strong> {savedData?.accountNumber}</p>
          )}
          {savedData?.accountType && (
            <p><strong>Account Type:</strong> {savedData?.accountType}</p>
          )}
          
          <div className="flex justify-end mt-4">
            <button 
              onClick={() => setIsEditing(true)} 
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Edit Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
