import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../redux/AuthSlice';
import { getDatabase } from '../redux/AuthSlice';
import { useNavigate } from 'react-router-dom';
import '../css/signin.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignIn = () => {
  const dispatch = useDispatch();
  const db = getDatabase();
  const negative = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const handleSignIn = (e) => {
  //   e.preventDefault();

  //   if (username === db.username && password === db.password) {
  //     dispatch(setCredentials({ username, password }));
  //     setError('');
  //     alert('Đăng nhập thành công!');
  //     negative("/");
  //   } else {
  //     setError('Sai tài khoản hoặc mật khẩu');
  //   }
  // };

  const handleSignIn = (e) => {
    e.preventDefault();

    if (username === db.username && password === db.password) {
      dispatch(setCredentials({ username, password }));
      setError('');
      toast.success('Signed in successfully!');

      setTimeout(() => {
        negative("/");
      }, 1500);
    } else {
      setError('Incorrect username or password');
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSignIn}>
        <h2>Sign In</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Sign In</button>
      </form>
       <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
};

export default SignIn;
