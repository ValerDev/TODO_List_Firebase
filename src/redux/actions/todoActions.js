export const addTodoAC = todo => (dispatch, getState, { getFirebase, getFirestore }) => {
    if (todo) {
        const fireStore = getFirestore();
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid
        profile.todos.push({ text: todo, done: false, id: profile.todos.length + 1 })
        fireStore.collection('users').doc(authorId).update({
            'todos': profile.todos,
        }).then(() => {
            dispatch({ type: 'ADD_TODO', payload: todo });
        }).catch(err => {
            dispatch({ type: 'ADD_TODO_ERROR', payload: err });
        })
    }
};

export const editIsDoneAC = todos => (dispatch, getState, { getFirebase, getFirestore }) => {
    const fireStore = getFirestore();
    const authorId = getState().firebase.auth.uid
    fireStore.collection('users').doc(authorId).update({
        todos,
    }).then(() => {
        dispatch({ type: 'EDIT_IS_DONE_TODO', payload: todos });
    }).catch(err => {
        dispatch({ type: 'EDIT_IS_DONE_TODO_ERROR', payload: err });
    })
};
export const deleteTodoAC = todos => (dispatch, getState, { getFirebase, getFirestore }) => {
    const fireStore = getFirestore();
    const authorId = getState().firebase.auth.uid
    fireStore.collection('users').doc(authorId).update({
        todos,
    }).then(() => {
        dispatch({ type: 'DELETE_TODO', payload: todos });
    }).catch(err => {
        dispatch({ type: 'DELETE_TODO_ERROR', payload: err });
    })
};