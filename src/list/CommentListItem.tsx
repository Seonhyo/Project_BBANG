import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    backcround: white;
    :hover {
        backfround: lightgrey;
    }
`;

const ContentText = styled.p`
    font-size: 14px;
`;

const CommentListItem = () => {

    return (
        <Wrapper>
            <ContentText>댓글</ContentText>
        </Wrapper>
    );
}

export default CommentListItem;