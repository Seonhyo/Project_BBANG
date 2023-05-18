import React, { useState } from 'react';
import DaumPostcodeEmbed from '@actbase/react-daum-postcode';
import { Button, Modal } from 'antd';
import { Input, Space } from 'antd';

const PostCode = () => {
    
    const SearchInput: React.FC = () => (
        <>
        <Space direction='vertical'>
            <Space direction="horizontal">
            <Input type='text' id='postCode' placeholder="우편번호" />
            <Button onClick={() => setModal(true)} type='primary'>주소찾기</Button>
            </Space>
            <Space direction='horizontal'>
                <Input type='text' id="address" placeholder="주소" />
                <Input type='text' id="detailAddress" placeholder="상세주소" />
            </Space>
        </Space>
        </>
    );
    const [isModal, setModal] = useState(false);
    
    const handleOk = () => {
        setModal(false);
    };
    
    const handleCancel = () => {
        setModal(false);
    };

    return (
        <>
            <SearchInput />
            <Modal title="주 소 찾 기" open={isModal} 
                onOk={handleOk} onCancel={handleCancel}>
            <DaumPostcodeEmbed
                    style={{ width: 320, height: 320 }}
                    jsOptions={{ animation: true, hideMapBtn: true }}
                    onSelected={data => {
                        alert(JSON.stringify(data));
                        setModal(false);
                    } }
                    onError={function (error: unknown): void {
                        throw new Error('Function not implemented.');
                    } }
            />
            </Modal>
        </>
    )
}

export default PostCode;