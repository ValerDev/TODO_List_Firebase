import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import TodoList from "./components/TodoList";
import { SIGN_IN_ROUTE, SIGN_UP_ROUTE, TODO_ROUTE } from "./utils/constants";

export const publicRoutes = [
    {
        path: SIGN_IN_ROUTE,
        Component: SignIn,
    },
    {
        path: SIGN_UP_ROUTE,
        Component: SignUp
    }
];

export const privateRoutes = [
    {
        path: TODO_ROUTE,
        Component: TodoList,
    },
];