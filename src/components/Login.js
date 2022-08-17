/* eslint-disable */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logInUser } from '../redux/User/User';
import { useNavigate } from 'react-router-dom';
import auth from '../img/authentication.jpg';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch(logInUser(data))? navigate('/') : null;
  };

  return (
    <div
      className="reserve-container"
      style={{
        backgroundImage: `url(${auth})`,
      }}
    >
      <div className="reserve-heading">
        <h1>WELCOME BACK!</h1>
        <hr />
        <p>Sign in to continue</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} style={{ float: 'right' }}>
        <div className="login-form">
          <input {...register('email')} placeholder="✉️  email" />
        </div>
        <div className="login-form">
          <input {...register('password')} placeholder="🔒  password" />
        </div>
        <div className="login-btn">
          <input type="submit" value="SIGN IN" />
        </div>
      </form>
    </div>
  );
}
/* eslint-enable */
