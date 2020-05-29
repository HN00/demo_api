import React from 'react';
import { Button, Progress } from 'antd';


export const ImageComponent = props => {
    const {data, handleConfirmImage, indexImages} = props;
    return (
        <div className="img">
            <h4 className="my-4" style={{textAlign:'center'}}>
                    Images based asseememts
            </h4>
            <Progress
                strokeColor={{
                  from: '#108ee9',
                  to: '#87d068',
                }}
                percent={parseFloat(indexImages/55*100).toFixed(2)}
                status="active"
            />
            <div className="img-header">
                <span className="img-header-color"/>
                <p className="img-header-title">{data && data.caption}</p>
            </div> 
            <img className="img-content" alt="" src={ data && data.image_desktop}/>  
            <div className="img-btn">
                <div className="img-btn-relative">
                    <Button type="primary" className="img-btn-relative-btn" onClick={() => handleConfirmImage('me')}>Me</Button>
                    <Button type="primary" danger className="img-btn-relative-btn" onClick={() => handleConfirmImage('notMe')}>Not Me</Button>
                </div>
            </div>  
        </div>
    );
}