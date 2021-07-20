import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { SIGN_IN_ROUTE, TODO_ROUTE } from '../utils/constants';
const AppRouter = (props) => {
    const { auth } = props;
    const [user, setUser] = React.useState(false);

    React.useEffect(() => {
        auth.isEmpty  ?  setUser(false): setUser(true)
    }, [auth])
    return user ?
        (
            <Switch>
                {privateRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} component={Component} setUser={setUser} exact />
                )}
                <Redirect to={TODO_ROUTE} />
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} component={Component} exact />
                )}
                <Redirect to={SIGN_IN_ROUTE} />
            </Switch>
        )
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    };
};
export default connect(mapStateToProps)(AppRouter);
