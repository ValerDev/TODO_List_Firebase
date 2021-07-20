const initialState = {
    authError: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.error('LOGIN_ERROR: ', action.payload);
            return {
                ...state,
                authError: 'Incorrect login or password',
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,    
                authError: null,
            };
        case 'SIGNOUT_SUCCESS':
            return state;
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                authError: null,
            };
        case 'SIGNUP_ERROR':
            console.error('SIGNUP_ERROR: ', action.payload);
            return {
                ...state,
                authError: action.err.message,
            }
        default:
            return state;
    }

}

export default authReducer;