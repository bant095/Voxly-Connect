import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../redux/actions/authAction';

const Register = () => {
  const { auth, alert } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialState = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    cf_password: '',
    gender: 'male',
  };
  const [userData, setUserData] = useState(initialState);

  const { fullname, username, email, password, cf_password, gender } = userData;

  //state for password
  const [typePass, setTypePass] = useState(false);
  //state for confirm password
  const [typeCfPass, setTypeCfPass] = useState(false);

  useEffect(() => {
    if (auth.token) navigate.push('/');
  }, [auth.token, navigate]);

  //handlechange input
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  //handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    // verification of authAction
    dispatch(register(userData));
  };

  // const navigate = useNavigate();
  // navigate('/home');

  return (
    <div className='auth_page'>
      <form onSubmit={handleSubmit}>
        <h3 className='text-center mb-4'>VOXLY</h3>
        {/* FULL NAME */}
        <div className='form-group'>
          <label htmlFor='fulllname'>Full Name</label>
          <input
            type='text'
            className='form-control'
            id='fullname'
            onChange={handleChangeInput}
            name='fullname'
            value={fullname}
            // input validate
            style={{ background: `${alert.fullname ? '#fd2d6a14' : ''}` }}
          />
          {/* alert */}
          <small className='form-text text-danger'>
            {alert.fullname ? alert.fullname : ''}
          </small>
        </div>

        {/* USERNAME */}
        <div className='form-group'>
          <label htmlFor='fulllname'>Username</label>
          <input
            type='text'
            className='form-control'
            id='username'
            onChange={handleChangeInput}
            name='username'
            value={username.toLowerCase().replace(/ /g, '')}
            // input validate
            style={{ background: `${alert.username ? '#fd2d6a14' : ''}` }}
          />

          {/* alert */}
          <small className='form-text text-danger'>
            {alert.username ? alert.username : ''}
          </small>
        </div>

        {/* EMAIL */}
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            onChange={handleChangeInput}
            name='email'
            value={email}
            // input validate
            style={{ background: `${alert.email ? '#fd2d6a14' : ''}` }}
          />

          {/* alert */}
          <small className='form-text text-danger'>
            {alert.email ? alert.email : ''}
          </small>
        </div>

        {/* PASSWORD */}
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
              // input validate
              style={{ background: `${alert.password ? '#fd2d6a14' : ''}` }}
            />
            {/* show and hide btn */}
            <small onClick={() => setTypePass(!typePass)}>
              {typePass ? 'Hide' : 'Show'}
            </small>
          </div>

          {/* alert */}
          <small className='form-text text-danger'>
            {alert.password ? alert.password : ''}
          </small>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className='form-group'>
          <label htmlFor='cf_password'> Confirm Password</label>
          <div className='pass'>
            <input
              type={typeCfPass ? 'text' : 'password'}
              className='form-control'
              id='cf_password'
              onChange={handleChangeInput}
              name='cf_password'
              value={cf_password}
              // input validate
              style={{ background: `${alert.cf_password ? '#fd2d6a14' : ''}` }}
            />
            <small onClick={() => setTypeCfPass(!typeCfPass)}>
              {typeCfPass ? 'Hide' : 'Show'}
            </small>
          </div>
          {/* alert */}
          <small className='form-text text-danger'>
            {alert.cf_password ? alert.cf_password : ''}
          </small>
        </div>

        {/* GENDER */}
        <div className='row justify-content-between mx-0 mb-1'>
          <label htmlFor='male'>
            Male:
            <input
              type='radio'
              id='male'
              name='gender'
              value='male'
              defaultChecked={handleChangeInput}
            />
          </label>

          <label htmlFor='female'>
            Female:
            <input
              type='radio'
              id='female'
              name='gender'
              value='female'
              defaultChecked={handleChangeInput}
            />
          </label>

          <label htmlFor='other'>
            Other:
            <input
              type='radio'
              id='other'
              name='gender'
              value='other'
              defaultChecked={handleChangeInput}
            />
          </label>
        </div>

        {/* BUTTONS */}
        <button type='submit' className='btn btn-dark w-100'>
          Register
        </button>
        <p className='my-2'>
          Already have an account?
          <Link to='/login' className='pl-2' style={{ color: 'crimson' }}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
