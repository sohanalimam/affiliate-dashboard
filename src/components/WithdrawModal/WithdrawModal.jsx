import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function WithdrawAndSuccessModal({ isOpen, onClose }) {
  const [step, setStep] = useState('withdraw'); // Can be 'withdraw' or 'success'
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    if (parseInt(value) >= 1000) {
      setError('');
    } else if (value) {
      setError('Amount must be 1000 or more.');
    } else {
      setError('');
    }
  };

  const handleWithdraw = () => {
    if (parseInt(amount) >= 1000) {
      // Proceed to success step
      setStep('success');
    } else {
      setError('Amount must be 1000 or more.');
    }
  };

  const handleClose = () => {
    // Reset modal state
    setAmount('');
    setError('');
    setStep('withdraw');
    onClose();
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg w-96">
        {step === 'withdraw' && (
          <>
            <h2 className="text-xl font-semibold mb-4">Withdraw Funds</h2>
            <p>Enter the amount you want to withdraw (minimum ৳1000).</p>
            <input
              type="number"
              className="w-full border rounded p-2 mt-3 mb-2"
              placeholder="Amount"
              value={amount}
              onChange={handleAmountChange}
            />
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded mr-2"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                className={`py-2 px-4 rounded ${amount >= 1000 ? 'bg-ecomtech text-white' : 'bg-gray-400 text-white cursor-not-allowed'}`}
                onClick={handleWithdraw}
                disabled={amount < 1000}
              >
                Withdraw
              </button>
            </div>
          </>
        )}

        {step === 'success' && (
          <>
            <h2 className="text-xl font-semibold mb-4">Request Submitted</h2>
            <p>Thanks for your request, we will transfer your requested amount to your account.</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-ecomtech text-white py-2 px-4 rounded"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}

export default WithdrawAndSuccessModal;
