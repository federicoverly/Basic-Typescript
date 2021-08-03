import React, { useEffect } from 'react'
import { useReducer } from 'react'

// Interface
interface AuthState {
    validating: boolean,
    token: string | null,
    username: string,
    name: string,
}

// How the initial state will look
const initialState: AuthState = {
    validating: true,
    token: null,
    username: '',
    name: '',
}

type LoginPayload = {
    username: string,
    name: string,
}

// Type, rather than interface. It will not be expanded nor extended.
type AuthAction = 
    | {type: 'logout'}
    | { type: 'login', payload: LoginPayload}

// Creation of the reducer, a function. It has to return a state exactly as the initialState. It has to receive a state and an action
const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validating: false,
                token: null,
                username: '',
                name: '',
            }
        case 'login':
            return {
                validating: false,
                token: 'ABC123',
                username: action.payload.username,
                name: action.payload.name,
            } 
        default:
            return state;
    }
}

export const Login = () => {

    const [{ validating, token, name }, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        setTimeout( () => {
            dispatch({ type: 'logout'})
        }, 1500)
    }, [])

    const login = () => {
        dispatch( {
            type: 'login', 
            payload: { name: 'Federico', username:'Verly'}})
    }

    const logout = () => {
        dispatch( { type: 'logout'})
    }

    if( validating ) {
        return (
            <>
            <h3>Login</h3>

            <div className='alert alert-info'>
                Validating...
            </div>
            </>
        )
    }
    
    return (
        <>
            <h3>Login</h3>

            { (token) 
                ? <div className='alert alert-success'>Authorized. Hello {name}</div>
                : <div className='alert alert-danger'>Not authorized</div>  
            }

            { (token) 
                ? (<button className='btn btn-danger' onClick={ () => logout()}>
                        Logout
                    </button>)
                : (<button className='btn btn-primary' onClick={ () => login()}>
                        Login
                    </button>)  
            }   

           

            

            
        </>
    )
}
