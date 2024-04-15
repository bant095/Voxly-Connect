import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const initialState = { email: '', password: '' };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  //handlechange input
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className='auth_page'>
      <form>
        <h3 className=''>VOXLY</h3>

        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            onChange={handleChangeInput}
            name='email'
            value={email}
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputPassword1'>Password</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            onChange={handleChangeInput}
            name='password'
            value={password}
          />
        </div>

        <button
          type='submit'
          className='btn btn-dark w-100'
          disabled={email && password ? false : true}
        >
          Login
        </button>

        <p className='my-2'>
          You don't have an account?
          <Link to='/register' style={{ color: 'crimson' }}>
            Register Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
