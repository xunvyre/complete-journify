import {createContext, useReducer} from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE =
{
    user:
    {
        "_id": "637554133b4c178c255e0c65",
        "username": "boopsoops",
        "email": "boopsoops@gmail.com",
        "password": "$2b$10$MbjHrLFK/kArBZ8yMTVzbe6HjfvlwvKv8NI3fd9wetd0oPDbxsygG",
        "createdAt": "2022-11-16T21:20:19.902Z",
        "updatedAt": "2022-11-16T21:20:19.902Z",
        "__v": 0
    },
    isFetching: false,
    error: false
};

export const AuthContext =  createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) =>
{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    return(
        <AuthContext.Provider value ={{user: state.user, isFetching: state.isFetching, error: state.error, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
};