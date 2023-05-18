import { loginGoogle } from '../firebase';

const GoogleLoginForm = () => {

    return (
        <button type="submit" 
            onClick={loginGoogle}
            style={{letterSpacing: '3px', width: '375px'}}>
                GOOGLE 계정으로 로그인</button>
    )

}

export default GoogleLoginForm;