import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../redux/actions/authActions';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        alignItems: 'center',
        height: '100vh'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    header: {
        textAlign: 'center'
    },
    centered: {
        margin: '0 auto',
        textAlign: 'center'
    },
    inpsBlock: {
        width: '400px',
        gap: 10
    },
    toSignIn: {
        fontSize: '12px',
        color: '#282726',
    },
}));

const SignUp = (props) => {
    const classes = useStyles();
    const { authError } = props;

    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSignUp = (e) => {
        e.preventDefault();

        props.signUp({ email, password, firstName, lastName })
    }

    return (
        <Grid container className={classes.root} spacing={2} justifyContent="center" alignItems="center" direction='column'>
            <form noValidate autoComplete="off" onSubmit={handleSignUp}>

                <Card variant="outlined">
                    <CardHeader className={classes.header} title='Sign Up' container ></CardHeader>
                    <CardContent >
                        <Grid container direction='column' className={classes.inpsBlock}>
                            <TextField
                                id="fistName"
                                label="FistName"
                                variant="outlined"
                                type="text"
                                onChange={e => { setFirstName(e.target.value) }}
                                error={authError ? true : false}
                            />
                            <TextField
                                id="lastName"
                                label="LastName"
                                variant="outlined"
                                type="text"
                                onChange={e => { setLastName(e.target.value) }}
                                error={authError ? true : false}
                            />
                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                type="email"
                                onChange={e => { setEmail(e.target.value) }}
                                error={authError ? true : false}
                            />
                            <TextField
                                id="password"
                                label="Password"
                                variant="outlined"
                                type="password"
                                onChange={e => { setPassword(e.target.value) }}
                                error={authError ? true : false}
                                helperText={authError ? authError : ''}
                            />
                            <br />
                            <p className={classes.toSignIn}>
                                Have an account?&nbsp;
                                <Link to='/signIn' >
                                    sign in
                                </Link>
                            </p>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button className={classes.centered} variant="outlined" type='submit'>Sign Up</Button>
                    </CardActions>
                </Card>
            </form>
        </Grid>

    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: newUser => dispatch(signUp(newUser))
    };
};


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);