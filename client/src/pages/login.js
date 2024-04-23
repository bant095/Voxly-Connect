import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../redux/actions/authAction';
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {
  const { auth, alert } = useSelector((state) => state);
  const initialState = { email: '', password: '' };
  const [userData, setUserData] = useState(initialState);
  const navigate = useNavigate();
  const { email, password } = userData;

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    // Check if auth token exists and navigate to home page if authenticated
    if (auth.token) {
      // console.log('Navigating to home page...');
      navigate('/');
    }
  }, [auth.token, navigate]); // Ensure useEffect triggers on auth.token or navigate change

  // Handle input changes
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Handle form submission (login)
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };

  // console.log('Auth state:', auth); // Log auth state for debugging

  return (
    <div className='auth_page'>
      <form onSubmit={handleSubmit}>
        <h3 className='text-center mb-4'>VOXLY</h3>

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
            style={{ background: `${alert.email ? '#fd2d6a14' : ''}` }}
          />
          <small className='form-text text-danger'>
            {alert.email ? alert.email : ''}
          </small>
        </div>

        <div className='form-group'>
          <label htmlFor='exampleInputPassword1'>Password</label>
          <div className='pass'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='form-control'
              id='exampleInputPassword1'
              onChange={handleChangeInput}
              name='password'
              value={password}
              style={{ background: `${alert.password ? '#fd2d6a14' : ''}` }}
            />
            <small onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'Hide' : 'Show'}
            </small>
          </div>
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
          <Link to='/register' className='pl-2' style={{ color: 'crimson' }}>
            Register Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
