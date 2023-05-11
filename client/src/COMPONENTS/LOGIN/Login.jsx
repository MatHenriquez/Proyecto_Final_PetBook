import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

//  ERRORES Y VALIDACION
const [errors, setErrors] = useState({});

function validateForm() {
  let errors = {};
   if (!formState.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
    errors.email = 'Email is invalid';
  }
  if (!formState.password) {
    errors.password = 'Password is required';
  }
  return errors;
}

function handleCredentialResponse(response){
    console.log('id_token',  response.credential) // google token
    const body = {id_token: response.credential}
    fetch('https://proyectofinalpetbook-production.up.railway.app/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then( resp => resp.json())
    .then( data => {
      console.log(data)
      localStorage.setItem('email', data.user.email);
      localStorage.setItem('nickname', data.user.nickname);
      localStorage.setItem('id', data.user.id);
      localStorage.setItem('token', data.token);
      navigate('/home');
    })
    .catch(error => console.error(error))
  }

  
  function handleSignOutButton(e){
    console.log(google.accounts.id);
    google.accounts.id.disableAutoSelect();
    google.accounts.id.revoke(localStorage.getItem('email'), done =>{
      localStorage.clear();
      location.reload();
    })
  }

  useEffect(()=>{

    
    google.accounts.id.initialize({
      client_id: "29807012109-in3jnv9asdchp613plc7ng3mp0oqpq8o.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
  },[])

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setFormState({
      ...formState,
      email: event.target.value,
    });
  };

  const handlePasswordChange = (event) => {
    setFormState({
      ...formState,
      password: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // cookies.set('idUser', 'id', {path: '/'})
    console.log(formState);

    const errors = validateForm(); //validar si hay errores 
    setErrors(errors);


   const response = await fetch(`https://proyectofinalpetbook-production.up.railway.app/auth/login/`, {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    });

    const data = await response.json();

    if (response.ok) {
      //console.log(response)
      console.log(data)
      localStorage.setItem('token', data.token);
      localStorage.setItem('id', data.user.id);
      localStorage.setItem('email', data.user.email);
      localStorage.setItem('nickname', data.user.nickname);
      navigate('/home');
    } else {
      alert(data.msg);
    }
  };

  return (
    <div 
    className='max-w-screen max-h-fit'>
    <div 
    className='bg-gray-100 flex flex-col justify-center max-h-fit'>
    
    <form onSubmit={handleSubmit} 
    className='max-w-[30rem] w-full mx-auto rounded-lg bg-white  p-4'> 


       
       <div className='flex flex-col'>
 
        <input
          type="email"
          name="email"
          placeholder='Email'
          value={formState.email}
          onChange={handleEmailChange}
          className='inputs'
        />
        {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email}</p>}
      </div>

      <div className='flex flex-col py-2'>

        <input
          type="password"
          name="password"
          placeholder='Password'
          value={formState.password}
          onChange={handlePasswordChange}
          className='inputs'
        />
        {errors.password && <p className='text-red-500 text-xs mt-1'>{errors.password}</p>}
    	</div>

      <div>
      <p className='flex items-center text-gray-400 text-sm py-2 mt-[-1rem] font-extralight italic'>
        <Link to='/resetpassword' className='underline'>forgot my password</Link>
      </p>
      {/* cambiarle la fuente */}

      </div>

      <div className='flex justify-between py-3'>
                    {/* <p className='flex items-center text-gray-400 '>
                      <input className='mr-2 ' type="checkbox" /> Remember me
                    </p> */}

   
      </div>
      
      <button 
      type="submit"
      className='buttonSubtmit'
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSubmit();}}}
      >Login
      </button>



      <h4 className='text-center text-secondary font-normal italic  mb-2'>Don't have an account?</h4>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}> 
      <Link to='/register'>
     <button className='buttonSubtmitOtro'> Create an account</button>
     </Link>

     <h4 className='text-center text-black font-normal mt-2'>OR</h4>

    <div id="buttonDiv"></div>
  {/* <button id="googleSignOut" onClick={handleSignOutButton}>Sign Out</button>   ESTO HAY QUE AGREGARLO CUANDO HAGAMOS UN */}

      </div>
      
      <Link to='/home'>
      <button className='text-gray-300 hover:text-gray-700 w-full'>Log in later</button>
      </Link>


    </form>
    </div>
    </div>
  );
};

export default Login;
