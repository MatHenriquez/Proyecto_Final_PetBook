import React, { useState } from 'react';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!oldPassword) {
      setErrorMessage('Please enter your old password');
      return;
    }
  
    if (!newPassword) {
      setErrorMessage('Please enter a new password');
      return;
    }
  
    if (!confirmNewPassword) {
      setErrorMessage('Please confirm your new password');
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setErrorMessage('New password and confirm new password do not match!');
      return;
    }
    

    try {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');
        const response = await fetch(`https://proyectofinalpetbook-production.up.railway.app/users/changepassword/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
        "x-token": token },
        body: JSON.stringify({ oldPassword, newPassword }),
      });
      console.log(response);
      if(response.ok){
        alert ('Your password was succesfully changed')
      }
      if (!response.ok) {
        throw new Error('Error changing password');
      }

      setOldPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className='mx-auto max-w-lg p-4 bg-white rounded-lg'>
    
        <h2 className="titleLeft text-center text-3xl lg:text-2xl mb-4 ">Settings:</h2>
    
    <form className='h-fit' onSubmit={handleSubmit}>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div>
        {/* <label className="text" htmlFor="oldPassword">Old Password:</label> */}
        <input className='inputs'
          type="password"
          id="oldPassword"
          value={oldPassword}
          onChange={(event) => setOldPassword(event.target.value)}
          minLength={5}
          maxLength={15}
          
          placeholder='Current Password'
        />
      </div>
      <div>
        {/* <label className="text" htmlFor="newPassword">New Password:</label> */}
        <input className='inputs'
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
          minLength={5}
          maxLength={15}
          
          placeholder='New Password'
        />
      </div>
      <div>
        {/* <label className="text" htmlFor="confirmNewPassword">Confirm New Password:</label> */}
        <input className='inputs'
          type="password"
          id="confirmNewPassword"
          value={confirmNewPassword}
          onChange={(event) => setConfirmNewPassword(event.target.value)}
          minLength={5}
          maxLength={15}
          
          placeholder='Confirm new Password'
        />
      </div>
      <button className='buttonSubtmit text-center '
      type="submit">Change My Password</button>
    </form>
    </div>
   
  );
};

export default ChangePassword;
