import React, { useState } from 'react';
import { registerUser } from '../../Redux/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../HEADER/Header';
import Footer from '../FOOTER/Footer';


const Registration = () => {
  const [formState, setFormState] = useState({
    nickname: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    role: 'user_role',
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formState.password !== formState.passwordConfirmation) {    
      alert('Las contraseñas no coinciden');      
    } else {     
      dispatch(registerUser({
        nickname: formState.nickname,
        password: formState.password,
        email: formState.email,
        role: formState.role
      }));
      
      // localStorage.setItem('token', response.data.token);
      // console.log('token' + localStorage.setItem('token'));

      
      navigate('/login');
    }

  }
  console.log('password ' + formState.password + '   passwordConfirmation ' + formState.passwordConfirmation);

  return (
    <div>

    <Header />


    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>

  <div 
  className='flex flex-col justify-center'>  
    <form onSubmit={handleSubmit}
    className='max-w-[400px] w-full mx-auto rounded-lg bg-white  p-4'>
    <h2 
    
        className='subtitle'>
          REGISTER.
    </h2>

    <div className='divForminput'>
      <label>
        {/* Nickname: */}
        <input 
        type="text" 
        name="nickname" 
        value={formState.nickname} 
        onChange={handleChange} 
        required
        placeholder='Nickname'
        className='inputs'
        
        />
      </label>

    </div>

    <div className='divForminput'>
      <label>
        {/* Email: */}
        <input 
        type="email" 
        name="email" 
        value={formState.email} 
        onChange={handleChange} 
        required
        placeholder='Email'
        className='inputs'
        />
      </label>
    </div>

    <div className='divForminput'>
      <label>
        {/* Password: */}
        <input 
        type="password" 
        name="password" 
        value={formState.password} 
        onChange={handleChange} 
        required 
        placeholder='Password'
        className='inputs' />        
      </label>
    </div>


    <div className='divForminput'>
      <label>
        {/* Repeat Password: */}
        <input 
        type="password" 
        name="passwordConfirmation" 
        placeholder='Repeat Password'
        onChange={handleChange} 
        required 
        className='inputs' 
        />
      </label>
      
    </div>

    <div className='divForminput'>
      {/* <label>
        Role:
        <input 
        type="text" 
        name="role" 
        value={formState.role} 
        onChange={handleChange} 
        required 
        className='inputs'
        /> 
        {/* <select name="" id="">user_role</select>
        <select name="" id="">admin_role</select> */}
      {/* </label>  */}

      {/* <select         onChange={handleChange} 
        required 
        className='w-full rounded-lg border p-2'>
        <option value="user_role">user</option>
        <option value='admin_role'>admin</option>
      </select> */}
      </div>
   
      <button 
      type="submit"
      className='buttonSubtmit'
      >
       Register
      </button>
    </form>
  </div> 

  
      {/* IMAGEN */}
      <div className='hidden sm:block place-items-center'>  
        <img className='w-full object-fill mt-9' src="/gatocompu.jpg" alt="" />
      </div>     
</div>
<div>
  <Footer />
</div>
</div>

  )};

export default Registration;