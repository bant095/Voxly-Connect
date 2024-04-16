import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../redux/actions/authAction';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

const Login = () => {
  const initialState = { email: '', password: '' };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  //state
  const [typePass, setTypePass] = useState(false);

  const dispatch = useDispatch();

  //handlechange input
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };

  // const navigate = useNavigate();
  // navigate('/home');

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
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputPassword1'>Password</label>
          <div className='pass'>
            <input
              type={typePass ? 'text' : 'password'}
              className='form-control'
              id='exampleInputPassword1'
              onChange={handleChangeInput}
              name='password'
              value={password}
            />
            <small onClick={() => setTypePass(!typePass)}>
              {typePass ? 'Hide' : 'Show'}
            </small>
          </div>
        </div>

        <button
          type='submit'
          className='btn btn-dark w-100'
          disabled={email && password ? false : true}
          // onClick={() => {
          //   navigate('/home');
          // }}
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
