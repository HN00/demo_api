import React, { useState, useEffect } from 'react';
import LoadingOverlay from 'react-loading-overlay';
import {callApiOpenEd} from './../../store/utils/api'

//Redux
import { connect } from 'react-redux';
import { actFetchListQuestionRequest, actFetchListImageRequest, } from './../../store/actions/index';

//Component
import { ImageComponent } from '../../component/ImageComponent'
import { ResultComponent } from '../../component/ResultComponent';
import { QuestionComponent } from '../../component/QuestionComponent';

const stepEnum = {
    Image : 'Image',
    Questions : 'Questions',
    Result: 'Result'
}

const HomeCtn = (props) => {
    const {getListQuestions, listQuestion, loading, getListImages, listImages} = props;
    const [state, setState] = useState({
        question: {},
        indexImages: 0,
        indexQuestions: 0,
        stepEnum: 'Result'
    });
    
    useEffect(() => {
        getListImages();
        getListQuestions();
    },[])

    const _handleSubmit = (rs) => {
        let strAnswer = rs.slice(0,rs.indexOf("/"));
        const indexQuestions = ++state.indexQuestions;
        localStorage.setItem(listQuestion && listQuestion[state.indexQuestions].question, strAnswer);
        setState(prevState => ({
            ...prevState,
            indexQuestions,
            stepEnum: indexQuestions === 19 ? 'Result' : state.stepEnum
        }))
    }

    const _handleConfirmImage = (type) => {
        const indexImages = ++state.indexImages;
        localStorage.setItem(props && listImages[state.indexImages].caption, type);
        setState(prevState => ({
            ...prevState,
            indexImages,
            stepEnum: indexImages === 55 ? 'Questions' : state.stepEnum
        }))
    }
    return(
        <LoadingOverlay
            active={loading}
            spinner
            text='Loading your content...'
        >
            <div className="container-fluid">
                <h1 style={{textAlign:'center'}}>
                    NuuEDScore™ Sample
                </h1>
                <div style={{display: state.stepEnum === stepEnum.Image ? 'block' : 'none'}}>
                    <ImageComponent handleConfirmImage={_handleConfirmImage} data={listImages && listImages[state.indexImages]} indexImages = {state.indexImages}/>
                </div>
                <div style={{display: state.stepEnum === stepEnum.Questions ? 'block' : 'none'}}>
                    <QuestionComponent handleSubmit = {_handleSubmit} data={listQuestion && listQuestion[state.indexQuestions]} indexQuestions= {state.indexQuestions} />
                </div>
                <div style={{display: state.stepEnum === stepEnum.Result ? 'block' : 'none'}}>
                    <ResultComponent/>
                </div>                
            </div>
        </LoadingOverlay>
    );
};

const mapStateToProps = state => {
    const {demo} = state;
    return {
        loading: demo.loading,
        listQuestion: demo.listQuestions,
        listImages: demo.listImages
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getListQuestions : () => {
            dispatch(actFetchListQuestionRequest());
        },
        getListImages : () => {
            dispatch(actFetchListImageRequest());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (HomeCtn);