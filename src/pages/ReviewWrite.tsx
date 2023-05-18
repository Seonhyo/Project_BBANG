import React ,{ useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PostCode from '../components/PostCode';
import { Button, Input, Space } from 'antd';

const ReviewWrite = () => {

    const modules = useMemo(
        () => ({
          toolbar: {
            container: [
              ["bold", "italic", "underline", "strike", "blockquote"],
              [{ size: ["small", false, "large", "huge"] }, { color: [] }],
              [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
                { align: [] },
              ],
              ["image", "video"],
            ],
          },
        }),
        []
      );

    return (
        <>
            <div style={{marginBottom: '20px'}}>
                <PostCode />
            </div>
            <Space direction='horizontal'>
                <Input type='text' placeholder='제목을 입력하세요' />
                <Button type='primary'>후기 등록</Button>
            </Space>
            <ReactQuill
                style={{height: "600px", marginTop: "20px"}} 
                theme="snow"
                modules={modules}
                placeholder='내용을 입력해주세요.'
            />
        </>
    )
}

export default ReviewWrite;