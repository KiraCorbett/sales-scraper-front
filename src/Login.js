import { useRef } from 'react';

const Login = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <form onSubmit={submitHandler} className='login-form'>
      <label htmlFor='email'>Email</label>
      <input ref={emailRef} id='email' type='email' />
      <label htmlFor='password'>Password</label>
      <input ref={passwordRef} id='password' type='password' />
      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
