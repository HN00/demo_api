import * as Types from '../constants/ActionsTypes';

var initialState = [];

const demo = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_LIST_QUESTIONS_START:
            return {
                ...state,
                loading: true
            }
        case Types.FETCH_LIST_QUESTIONS_SUCCESS:
            return {
                ...state,
                listQuestions: action.data,
                loading: false
            }

        case Types.FETCH_LIST_IMAGES_START:
            return {
                ...state,
                loading: true,
            }
        case Types.FETCH_LIST_IMAGES_SUCCESS:
            return {
                ...state,
                listImages: action.data.slides,
                loading: false
            }
        default: return state;
    }
};

export default demo;