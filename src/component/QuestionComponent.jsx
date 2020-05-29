import React, { useState } from 'react';
import LoadingOverlay from 'react-loading-overlay';
import { Radio, Button, Progress } from 'antd';

const {Group} = Radio;

export const QuestionComponent = props => {
    const {data, handleSubmit, indexQuestions} = props;
    console.log(indexQuestions)
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
            <div className="container-fluid my-5" style={{textAlign:'center', display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center', width: 900}}>
                <h4 className="my-4">
                    Skills Asseememts
                </h4>
                <Progress
                    strokeColor={{
                      from: '#108ee9',
                      to: '#87d068',
                    }}
                    percent={parseFloat(indexQuestions/55*100).toFixed(2)}
                    status="active"
                />
                {data && (
                <>
                    <h5 className="my-4">
                        Question: {" "}{data.question.indexOf('https') !== -1  ? (
                            <>
                                {data.question.slice(0, data.question.indexOf('https'))}
                                <img alt="" src={data.question.slice(data.question.indexOf('https'))} style={{width: 200, height: 'auto', display: 'block', margin: '20px auto'}} />
                            </>) 
                            : data.question}
                    </h5>
                    <Group className="my-4" name="radiogroup" onChange={(e) => _onChangeValue(e.target.value)} style={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'flex-start'}}>
                        {data.choices.map((item, index) => {
                            return(
                                <Radio value={item.choice + item.url} key={index + item.url} className='my-2'>
                                    {item.choice.indexOf('https') !== -1 ? 
                                    <img alt="" src={item.choice} style={{width: 30, height: 'auto', display: 'inline-block', margin: '30px auto'}} />
                                    : item.choice}
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