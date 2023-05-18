import React from 'react';

import '../styles/Form.css'
import { Link } from 'react-router-dom';
import GoogleLoginForm from './GoogleLoginForm';

const LoginForm = () => {

  return (
    <div className='auth-wrapper'>
      <div style={{textAlign: 'center'}}>
        <h3>로 그 인</h3>
      </div>
      <form>
        <label>아이디</label>
        <input name='ID' type='email' placeholder="abcd@gmail.com" />
        <label>비밀번호</label>
        <input
          name='password' type='password' 
        />
        <div style={{marginTop: 30, textAlign: 'center'}}>
          <span style={{marginRight: 50}}>아직 회원이 아니신가요?</span>
          <Link style={{color: 'gray', textDecoration: 'none'}} to='/join'>가입하러 가기</Link>
        </div>
        <input type="submit" value='로그인' />
        <GoogleLoginForm />
      </form>
    </div>
  )
}

export default LoginForm;