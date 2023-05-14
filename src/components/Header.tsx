import { Button } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Header = () => {
    
    const navigate = useNavigate();
    
    const handleClickJoin = () => {
        navigate("/join")
    }

    const handleClickLogin = () => {
        navigate("/login")
    }
    return (
        <HeaderBar>
                <Link to="/" style={{textDecoration: "none", color: "#FFE8D6"}}>빵빵하게</Link>
                <BtnBox>
                    <Button type="primary" danger onClick={handleClickJoin}
                        style={{margin: '20px'}}>회원가입</Button>
                    <Button type="primary" danger onClick={handleClickLogin}>로그인</Button>
                </BtnBox>
        </HeaderBar>
    )
}

const HeaderBar = styled.div`
    background-color: #14213D;
    height: 16%;
    color: #FFE8D6;
    font-size: 40pt;
    font-weight: 400;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 24px;
    font-family: "jalnan";
`
const BtnBox = styled.div`
    font-size: 40pt;
    align-items: center;
    display: flex;
    justify-content: center;
`

export default Header;