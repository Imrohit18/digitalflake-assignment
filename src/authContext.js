import {createContext, useState} from 'react'
const AuthCountext = createContext();

const AuthProvider = ({children}) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthCountext.Provider value={[isLoggedIn, setIsLoggedIn]}>
            {children}
        </AuthCountext.Provider>
    )
}