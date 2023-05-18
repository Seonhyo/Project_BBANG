import React from "react";
import styled from "styled-components";

function ReviewListItem() {

    return (
        <>
            <Wrapper>
                <TitleText> 원조 빵 맛집, 성심당에 다녀왔습니다. </TitleText>
            </Wrapper>
            <Wrapper>
                <TitleText> 대전에 성심당❓ 군산엔 이성당❗ </TitleText>
            </Wrapper>
            <Wrapper>
                <TitleText> 초코파이는 역시 풍년제과네요👍 </TitleText>
            </Wrapper>
            <Wrapper>
                <TitleText> 부산 BNC 치퐁듀 없이는 사나마나😭😭 </TitleText>
            </Wrapper>
            <Wrapper>
                <TitleText> 갈매기에겐 새우깡, 사람에겐 목포 코롬방제과 새우바게트 </TitleText>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    cursor: pointer;
    background: white;
    border-radius: 15px;
    :hover {
        background: lightgrey;
    }
    margin-bottom: 20px;
`;

const TitleText = styled.p`
    font-size: 20px;
    font-weight: 500;
`;

export default ReviewListItem;