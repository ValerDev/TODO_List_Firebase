import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardHeader } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../redux/actions/authActions';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: '100%',
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
    toSignUp: {
        fontSize: '12px',
        color: '#282726',
        alignItems: 'center',
        display: 'flex'
    },
}));

const SignIn = (props) => {
    const classes = useStyles();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const { authError } = props;
    const handleSignIn = (e) => {
        e.preventDefault()
        props.signIn({ email, password })
    };
    return (
        <Grid className={classes.root} container  spacing={2} justifyContent="center" alignItems="center" direction='column'>
            <form noValidate autoComplete="off" onSubmit={handleSignIn}>

                <Card variant="outlined">
                    <CardHeader className={classes.header} title='Sign In' container ></CardHeader>
                    <CardContent >
                        <Grid container direction='column' className={classes.inpsBlock}>
                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                type="email"
                                value={ email }
                                onChange={e => { setEmail(e.target.value) }}
                                error={authError ? true : false}
                            />
                            <TextField
                                id="password"
                                label="Password"
                                variant="outlined"
                                type="password"
                                value={ password }
                                onChange={e => { setPassword(e.target.value) }}
                                error={authError ? true : false}
                                helperText={authError ? props.authError : ''}
                            />
                        </Grid>
                        <br></br>
                        <p className={classes.toSignUp}>
                            If you do not have an account, go to&nbsp;
                            <Link to='/signup' >
                                sign up
                            </Link>
                        </p>
                    </CardContent>
                    <CardActions>
                        <Button className={classes.centered} variant="outlined" type='submit'>Sign In</Button>
                    </CardActions>
                </Card>
            </form>
        </Grid>

    );
};


const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: creds => dispatch(signIn(creds))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);