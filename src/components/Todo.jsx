import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const Todo = (props) => {
    const { id, done, text, handleCheckChange, removeTodo } = props;
    return (
        <div className='todo'>
            <Checkbox checked={done} id={id} onChange={handleCheckChange} inputProps={{ 'aria-label': 'checkbox' }} color="default" />
            <p>{text}</p>
            <DeleteForeverIcon onClick={(event) => { removeTodo(event, id) }} />
        </div>
    )
}

export default Todo;
