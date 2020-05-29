import React, { useState } from 'react';
import LoadingOverlay from 'react-loading-overlay';
import { Radio, Button } from 'antd';

const {Group} = Radio;

export const QuestionComponent = props => {
    const {data, handleSubmit} = props;
    const [state, setState] = useState({
        value: '', 
    })

    const _onChangeValue =  value => {
        setState(prevState => ({
            ...prevState,
            value,
        }))
    }
    
    const _handleSubmit = async () => {
        await handleSubmit(state.value);
        setState(prevState => ({
            ...prevState,
            value: '',
        }))
    }
    return(
        <LoadingOverlay
            active={false}
            spinner
            text='Loading your content...'
        >
            <div className="container-fluid my-5" style={{textAlign:'center', display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
                <h4 className="my-4">
                    Skills Asseememts
                </h4>
                {data && (
                <>
                    <h5 className="my-4">
                        Question: {" "}{data.question}
                    </h5>
                    <Group className="my-4" name="radiogroup" onChange={(e) => _onChangeValue(e.target.value)} style={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'flex-start'}}>
                        {data.choices.map((item, index) => {
                            return(
                                <Radio value={item.choice + item.url} key={index + item.url} className='my-2'>
                                    {item.choice}
                                </Radio>
                            )
                        })}
                        
                    </Group>
                </>
                )}
                <Button type="primary" disabled= {state.value === ''} onClick={() => _handleSubmit()} className="img-btn-relative-btn mt-4">Next</Button>
            </div>
        </LoadingOverlay>
    );
}