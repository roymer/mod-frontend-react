import { SET_FORM_DATA } from './formTypes';
import { RESET_FORM_DATA } from './formTypes';

const initialState = {
    formData: {
        username: '',
        email: '',
        password: '',
    },
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA : {
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload,
                }
            }
        };
        case RESET_FORM_DATA:
            return initialState;
        default:
            return state;
    }
};

export default formReducer;