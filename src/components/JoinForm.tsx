import React from 'react';

import '../styles/Form.css'

const JoinForm = () => {

  return (
    <div className='auth-wrapper'>
      <div style={{textAlign: 'center'}}>
        <h3>회 원 가 입</h3>
      </div>
      <form>
        <label>아이디</label>
        <input name='ID' type='email' placeholder="abcd@gmail.com" />
        <label>비밀번호</label>
        <input
          name='password' type='password' 
          //{ required: true, maxLength: 10 })}
        />
        <label>닉네임</label>
        <input
          name='nickname' 
          //{ required: true, maxLength: 10 })}
        />
        <input type="submit" value='가입하기'/>
      </form>
    </div>
  )
}

export default JoinForm;