import React from "react";
import styled from "styled-components";
import ReviewListItem from "./ReviewListItem";

const ReviewList = () => {

    return (
        <Wrapper>
            <ReviewListItem />
        </Wrapper>
    )
}

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

export default ReviewList;