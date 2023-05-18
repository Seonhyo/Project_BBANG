import React from "react";
import { Button, Input, Space } from "antd";

const CommentListItem = () => {

    return (
        <Space direction="vertical">
            <Input type='text' id='comment' placeholder="댓글을 입력해주세요" />
            <Button type='primary'>댓글달기</Button>
        </Space>
    );
}

export default CommentListItem;