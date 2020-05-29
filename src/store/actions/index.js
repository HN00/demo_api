import * as Types from './../constants/ActionsTypes';
import {callApiOpenEd, callApiTraitify} from './../utils/api';

export const actFetchListQuestionRequest = () => {
    return dispatch => {
        dispatch(actFetchListQuestionStart());
        return callApiOpenEd().then(res => {
                return dispatch(actFetchListQuestionSuccess(res.data));
        })
    }
}

export const actFetchListQuestionStart = () => {
    return {
        type: Types.FETCH_LIST_QUESTIONS_START
    }
}

export const actFetchListQuestionSuccess = (data) => {
    return {
        type: Types.FETCH_LIST_QUESTIONS_SUCCESS,
        data
    }
}

export const actFetchListImageRequest = () => {
    return dispatch => {
        dispatch(actFetchListImageStart());
        return callApiTraitify().then(res => {
            return dispatch(actFetchListImageSuccess(res.data))
        })
    }
}

export const actFetchListImageStart = () => {
    return {
        type: Types.FETCH_LIST_IMAGES_START
    }
}

export const actFetchListImageSuccess = (data) => {
    return {
        type: Types.FETCH_LIST_IMAGES_SUCCESS,
        data
    }
}
