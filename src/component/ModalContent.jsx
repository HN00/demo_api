import React from 'react';

import {Modal} from 'antd';

// Image
import Yellow from'./../store/assets/img/yellow.png';
import Green from'./../store/assets/img/green.png';
import Blue from'./../store/assets/img/blue.png';
import Red from'./../store/assets/img/red.png';
import Orange from'./../store/assets/img/orange.png';

const borderColor = {
    Extraversion : "rgb(255, 204, 59)",
    Openness : "rgb(66, 176, 219)",
    Agreeableness : "rgb(41, 183, 112)",
    Conscientiousness : "rgb(249, 139, 28)",
    EmotionalStability : "rgb(239, 97, 94)"
}

const background = {
    Extraversion : "rgb(255, 204, 59,0.5)",
    Openness : "rgb(66, 176, 219,0.5)",
    Agreeableness : "rgb(41, 183, 112,0.5)",
    Conscientiousness : "rgb(249, 139, 28,0.5)",
    EmotionalStability : "rgb(239, 97, 94,0.5)"
}

const image = {
    Extraversion : Yellow,
    Openness : Blue,
    Agreeableness : Green,
    Conscientiousness : Orange,
    EmotionalStability : Red
}

const dataTest = ['Approachable', 'Energetic', 'Fast to act', 'Fun loving', 'Intense']
export const ModalContent = (props) => {
    const { visible, typeContent, closeModal } = props;
    return(
        <Modal
            visible={visible}
            title={"Detail Content"}
            width="60%"
            onCancel={closeModal}
            footer={null}
        >
            <div 
                className="rs-content"
                style={{
                    borderColor: borderColor[typeContent]
                }}
            >
                <div className="rs-content-header">
                    <div className="rs-content-header-icon">
                        <img src={image[typeContent]} alt="" className="rs-content-header-icon-img"/>
                    </div>
                    <div className="rs-content-header-letter">
                        <h2 className="rs-content-header-letter-title">
                            {typeContent} 
                            <span style={{ color: borderColor[typeContent], padding: '0px 5px'}}>|</span>
                            High
                        </h2>
                        <p className="rs-content-header-letter-text">
                            The candidate seems to be the sort of person who seeks out and enjoys being with other people. Typically, they find it stimulating to have lively discussions with others, and may even enjoy getting a reaction by saying or doing entertaining things. As such they are a 'do-think-do' kind of person who has plenty of enthusiasm and stamina, and a real thirst for getting out there and making their mark.
                        </p>
                    </div>
                </div>
                <div className="rs-content-list">
                    <h4 className="rs-content-list-letter">
                        Potential Benefits
                    </h4>
                    <ul className="rs-content-list-menu">
                        {dataTest.map((item, index) => {
                            return(<li className="rs-content-list-menu-item" style={{background: background[typeContent], marginBottom: '20px', marginLeft: `${(index + 1) % 4 !== 1 ? '2%': 0}`}}>
                                {item}
                            </li>)
                        })}                       
                    </ul>
                </div>
                <div className="rs-content-list">
                    <h4 className="rs-content-list-letter">
                        Room for Growth and Change
                    </h4>
                    <ul className="rs-content-list-menu">
                        {dataTest.map((item, index) => {
                            return(<li className="rs-content-list-menu-item" style={{background: background[typeContent], marginBottom: '20px', marginLeft: `${(index + 1) % 4 !== 1 ? '2%': 0}`}}>
                                {item}
                            </li>)
                        })}                       
                    </ul>
                </div>
            </div>
        </Modal>
    );
}