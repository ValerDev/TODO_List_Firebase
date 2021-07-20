import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { signOut } from '../redux/actions/authActions';
import { editIsDoneAC, deleteTodoAC } from '../redux/actions/todoActions';
import AddTodo from './AddTodo';
import Todo from './Todo';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AnnouncementIcon from '@material-ui/icons/Announcement';


const TodoList = (props) => {
    const { signOut, auth, profile, editIsDoneAC, deleteTodoAC } = props;
    const { todos } = profile
    const handleCheckChange = (event) => {
        todos.forEach(e => {
            if (e.id === +event.target.id)
                e.done = !e.done
        })
        editIsDoneAC(todos)
    }
    const removeTodo = (event, id) => {
        const filteredTodos = todos.filter(e =>{
            return e.id !== id
        })
        deleteTodoAC(filteredTodos)
    }
    if (!auth.uid) return <Redirect to={'/singIn'} />
    return (
        <div>
            <div>
                <h1>{`Hello ${profile.firstName}! Here are some things you need to do! `}</h1>
                <a className='sign-out' onClick={signOut} href={'/signIn'}><ExitToAppIcon /> Sign out</a>
            </div>
            <div>
                <AddTodo />
                <div>
                    { todos?.length ? todos.map(todo => <Todo key={todo.id} id={todo.id} text={todo.text} done={todo.done} handleCheckChange={handleCheckChange} removeTodo={removeTodo} />) :
                    <h2 className='no-items'><AnnouncementIcon/>No todos yet </h2>}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.firestore.ordered.todos ? state.firestore.ordered.todos : [],
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => { dispatch(signOut()) },
        editIsDoneAC: todos => { dispatch(editIsDoneAC(todos)) },
        deleteTodoAC: todos => { dispatch(deleteTodoAC(todos)) },
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'todos' }
    ]),
)(TodoList);

