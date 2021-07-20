const initialState = {
    todos: [
        { id: 1, text: 'todo 1', done: false },
        { id: 2, text: 'todo 2', done: true },
        { id: 3, text: 'todo 3', done: false },
    ]
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state;
        case 'ADD_TODO_ERROR':
            console.error('ADD_TODO_ERROR: ', action.payload);
            return state;
        case 'EDIT_IS_DONE_TODO':
            return state;
        case 'EDIT_IS_DONE_TODO_ERROR':
            console.error('EDIT_IS_DONE_TODO_ERROR', action.payload);
            return state;
        case 'DELETE_TODO':
            return state;
        case 'DELETE_TODO_ERROR':
            console.error('DELETE_TODO_ERROR: ', action.payload);
            return state
        default:
            return state;
    }

}

export default todoReducer;