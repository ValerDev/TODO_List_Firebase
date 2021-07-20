import React, {useState} from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addTodoAC } from '../redux/actions/todoActions';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '56px',
    
        '& > *': {
            height: '100%',
            margin: theme.spacing(1),
        },
    },
    buttonAdd: {
        backGroundColor: '#6370b0',
        color: 'white',
    }
}));

const AddTodo = (props) => {
    const [todo, setTodo] = useState('')
    const [isInputEmpty, setIsInputEmpty] = React.useState(false)
    const classes = useStyles();

    const handleAddTodo = (e) => {
        e.preventDefault()
        todo ? props.addTodo(todo)&&setIsInputEmpty(false) : setIsInputEmpty(true)
        setTodo('')
    }

    const handleTodoInput = (e) => {
        setTodo(e.target.value)  
        e.target.value ? setIsInputEmpty(false) : setIsInputEmpty(true)
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleAddTodo}>
            <TextField id="addTodo" 
            label="Todo" 
            variant="outlined" 
            value={todo} 
            onChange={handleTodoInput} 
            error={isInputEmpty ? true : false}
            helperText={isInputEmpty ? 'Please fill in the field' : ''}/>
            <Button variant="outlined" className={classes.buttonAdd} type="submit">Add</Button>
        </form>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => dispatch(addTodoAC(todo))
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);
