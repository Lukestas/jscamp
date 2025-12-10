import { createContext, useState } from "react";

export const AuthContext = createContext()

export function AuthProvide({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const login = () => {
        setIsLoggedIn(true)
    }

    const logout = () => {
        setIsLoggedIn(false)
    }

    const value = {
        isLoggedIn,
        logout,
        login
    }

    return <AuthContext value={value}>
        {children}
    </AuthContext>
}