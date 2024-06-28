import React from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Space, Spin } from 'antd';


export default function Loader() {
    return (
        <div className="Loader">
            <p>Loading...Please wait..</p>
            <space>
                {/* <Spin indicator={<LoadingOutlined spin />} size="large" /> */}
                <Spin indicator={<LoadingOutlined style={{ color : "#e86106", fontSize:45 }} spin />} />
            </space>
        </div>
    );
}