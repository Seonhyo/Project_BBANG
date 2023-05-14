import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';

const MainPage = () => {

    const navigate = useNavigate();
    
    const handleClickReviewWrite = () => {
        navigate("/review_write")
    }

    return (
        <Wrapper>
            <Header />
            <ContentsWrapper>
                <SideBar>
                    <ul style={{listStyle: 'none'}}>
                        <li style={{marginBottom: 20}}>
                            <a href='https://map.kakao.com/' style={{textDecoration: 'none', color: '#FFE8D6'}}
                                target='_blank' rel='noreferrer'>지 도 보 기</a>
                        </li>
                        <li onClick={handleClickReviewWrite} style={{cursor: 'pointer'}}>후 기 쓰 기</li>
                    </ul>
                </SideBar>
                <Content>
                    빵후기
                </Content>
            </ContentsWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`

const SideBar = styled.div`
    background-color: #14213D;
    width: 25%;
    height: 100vh;
    color: #FFE8D6;
    text-decoration: none;
    display: flex;
    max-width: 200px;
`

const ContentsWrapper = styled.div`
    display: flex;
`

const Content = styled.div`
    font-size: 20px;
    padding: 16px;
`

export default MainPage;