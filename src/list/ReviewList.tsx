import React from "react";
import styled from "styled-components";
import ReviewListItem from "./ReviewListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const PostList = () => {

    return (
        <Wrapper>
                return (
                    <ReviewListItem />
                );
        </Wrapper>
    )
}

export default PostList;