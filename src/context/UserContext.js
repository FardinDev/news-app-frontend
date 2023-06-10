import React, { createContext, useState, useEffect } from "react";
import userActions from "../helpers/userActions";

const UserContext = createContext();
export { UserContext }

export default ({ children }) => {
    // const [user, setUser] = useState({ 'fullName': 'Fardin Rahman', 'email': 'koushikme@gmail.com' });
    // const [token, setToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Ln_HY7p9XKZi_RqfIgWlQbquy_6sMHISdQ2dFTgYsjE");
    // const [authenticated, setAuthenticated] = useState(true);

    const [authLoading, setAuthLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        let isMounted = true;

        if (isMounted) {
            if (token) {
                localStorage.setItem('token', token);
                setAuthLoading(false);
            }
        }

        return () => {
            isMounted = false;
        }
    }, [token])


    useEffect(() => {

        let localToken = localStorage.getItem('token');

        if (localToken) {
            setToken(localToken);
            setAuthenticated(true);
        }
        setAuthLoading(false);

        return;
        userActions.fetchToken().then((token) => {
            setToken(token);
            fetch("http://localhost:3001/auto-login", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": token,
                },
                credentials: "include",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (!Object.keys(data).includes("error")) {
                        console.log(data);
                        setUser(data);
                        setAuthenticated(true);
                    }
                });
        });
    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                token,
                setToken,
                authenticated,
                setAuthenticated,
                authLoading,
                setAuthLoading
            }}
        >
            {children}
        </UserContext.Provider>
    );
};