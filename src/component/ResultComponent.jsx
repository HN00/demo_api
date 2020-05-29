import React, { useState } from 'react';

import {Doughnut} from 'react-chartjs-2';

// Component
import { ModalContent } from './ModalContent'

const blockResult = {
    Extraversion : "Extraversion",
    Openness : "Openness",
    Agreeableness : "Agreeableness",
    Conscientiousness : "Conscientiousness",
    EmotionalStability : "EmotionalStability"
}

const data = {
	labels: [
		'Extraversion',
		'Openness',
		'Agreeableness',
		'Conscientiousness',
		'Emotional Stability',
    ],
	datasets: [{
		data: [10,10,10,10,10],
		backgroundColor: [
        "rgb(255, 204, 59)",
		"rgb(66, 176, 219)",
        "rgb(41, 183, 112)",
        "rgb(249, 139, 28)",
        "rgb(239, 97, 94)"
		],
		hoverBackgroundColor: [
        "rgb(255, 204, 59,0.5)",
		'rgb(66, 176, 219,0.5)',
        'rgb(41, 183, 112,0.5)',
        'rgb(249, 139, 28,0.5)',
        'rgb(239, 97, 94,0.5)'
		]
	}]
};


export const ResultComponent = props => {
    const [state, setState] = useState({
        blockResult: "Extraversion",
        visibleModal: false,
    });

    const _handleChangeState = (key, value) => {
        setState( prevState => ({
            ...prevState,
            [key] : value,
        }));
    }
    const _handleClickChartElm = (dataEvent) => {
        if (dataEvent) {
            const index = dataEvent._index;
            let blockResultData;
            switch(index) {
                case 0: 
                    blockResultData = blockResult.Extraversion;
                    break;
                case 1: 
                    blockResultData = blockResult.Openness;
                    break;
                case 2:
                    blockResultData = blockResult.Agreeableness;
                    break;
                case 3:
                    blockResultData = blockResult.Conscientiousness;
                    break;
                case 4:
                    blockResultData = blockResult.EmotionalStability;
                    break;
                default:
                    break;
            }

            setState(prevState => ({
                ...prevState,
                visibleModal: true,
                blockResult: blockResultData
            }))
        }        
    }
    return (
        <div className="rs">
            {/* <ul className="rs-header">
                <li 
                    style={{ 
                        borderRadius: "4px 0 0 0", 
                        cursor: 'pointer', 
                        backgroundColor: 'rgba(255, 204, 59, 0.1)' 
                    }} 
                    onClick={() => _handleChangeState('blockResult', 'Extraversion')}
                    className="rs-header-item"
                >
                    <div 
                        className="rs-header-item-around" 
                        style={{ 
                            backgroundColor: 'rgba(255, 204, 59, 0.1)',
                            borderColor: borderColor.Extraversion 
                        }}
                    >
                        <div className="rs-header-item-around-content">
                            <img src={Yellow} alt="" className="rs-header-item-around-content-img"/>
                        </div>
                    </div>
                </li>
                <li 
                    style={{ 
                        borderRadius: "0 4px 0 0", 
                        cursor: 'pointer', 
                        backgroundColor: 'rgba(66, 176, 219, 0.1)' 
                    }} 
                    onClick={() => _handleChangeState('blockResult', 'Openness')}
                    className="rs-header-item"
                >
                    <div 
                        className="rs-header-item-around" 
                        style={{
                            backgroundColor: 'rgba(66, 176, 219, 0.1)',
                            borderColor: borderColor.Openness
                        }}
                    >
                        <div className="rs-header-item-around-content">
                            <img src={Blue} alt="" className="rs-header-item-around-content-img"/>
                        </div>
                    </div>
                </li>
                <li 
                    style={{ 
                        borderRadius: "0 4px 0 0", 
                        cursor: 'pointer', 
                        backgroundColor: 'rgba(41, 183, 112, 0.1)' 
                    }} 
                    onClick={() => _handleChangeState('blockResult', 'Agreeableness')}
                    className="rs-header-item"
                >
                    <div 
                        className="rs-header-item-around" 
                        style={{
                            backgroundColor: 'rgba(41, 183, 112, 0.1)',
                            borderColor: borderColor.Agreeableness
                        }}
                    >
                        <div className="rs-header-item-around-content">
                            <img src={Green} alt="" className="rs-header-item-around-content-img"/>
                        </div>
                    </div>
                </li>
                <li 
                    style={{ 
                        borderRadius: "0 4px 0 0", 
                        cursor: 'pointer', 
                        backgroundColor: 'rgba(249, 139, 28, 0.1)',
                        
                    }} 
                    onClick={() => _handleChangeState('blockResult', 'Conscientiousness')}
                    className="rs-header-item"
                >
                    <div 
                        className="rs-header-item-around" 
                        style={{
                            backgroundColor: 'rgba(249, 139, 28, 0.1)',
                            borderColor: borderColor.Conscientiousness 
                        }}
                    >
                        <div className="rs-header-item-around-content">
                            <img src={Orange} alt="" className="rs-header-item-around-content-img"/>
                        </div>
                    </div>
                </li>
                <li 
                    style={{ 
                        borderRadius: "0 4px 0 0", 
                        cursor: 'pointer', 
                        backgroundColor: 'rgba(239, 97, 94, 0.1)' 
                    }} 
                    onClick={() => _handleChangeState('blockResult', 'EmotionalStability')}
                    className="rs-header-item"
                >
                    <div 
                        className="rs-header-item-around" 
                        style={{
                            backgroundColor: 'rgba(239, 97, 94, 0.1)',
                            borderColor: borderColor.EmotionalStability 
                        }}
                    >
                        <div className="rs-header-item-around-content">
                            <img src={Red} alt="" className="rs-header-item-around-content-img"/>
                        </div>
                    </div>
                </li>
            </ul> */}
            <Doughnut data={data} onElementsClick={elements => _handleClickChartElm(elements[0])}/>
            <ModalContent
                visible = {state.visibleModal}
                typeContent = {state.blockResult}
                closeModal = {() => _handleChangeState('visibleModal', false)}
            />
        </div>
    );
}