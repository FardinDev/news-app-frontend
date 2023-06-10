export default {
    fetchToken: async () => {
        try {
            const res = await fetch("http://localhost:3001/auth-check", {
                credentials: "include",
            });
            const data = await res.json();
            return data.csrf_auth_token;
        } catch (error) {
            console.log(error);
        }
    },
    logOut: async (token) => {
        localStorage.removeItem("token");
        return true;
        try {
            const res = await fetch("http://localhost:3001/logout", {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": token,
                },
                credentials: "include",
            });
            const data = res.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    logIn: async (email, password) => {

        return { email: email, fullName: 'TestName', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Ln_HY7p9XKZi_RqfIgWlQbquy_6sMHISdQ2dFTgYsjE' };
        // try {
        //     const res = await fetch("http://localhost:3001/login", {
        //         method: "POST",
        //         headers: {
        //             Accept: "application/json",
        //             "Content-Type": "application/json",
        //             "X-CSRF-TOKEN": token,
        //         },
        //         body: JSON.stringify({ user: { email, password } }),
        //         credentials: "include",
        //     });
        //     const data = await res.json();
        //     if (res.ok) {
        //         console.log(`Logged in as: ${data.email}`);
        //     } else {
        //         console.log(data.errors);
        //     }
        //     return data;
        // } catch (error) {
        //     console.log(error);
        // }
    },
    register: async (fullName, email, password) => {

        return { email: email, fullName: fullName, token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Ln_HY7p9XKZi_RqfIgWlQbquy_6sMHISdQ2dFTgYsjE' };
        // try {
        //     const res = await fetch("http://localhost:3001/login", {
        //         method: "POST",
        //         headers: {
        //             Accept: "application/json",
        //             "Content-Type": "application/json",
        //             "X-CSRF-TOKEN": token,
        //         },
        //         body: JSON.stringify({ user: { email, password } }),
        //         credentials: "include",
        //     });
        //     const data = await res.json();
        //     if (res.ok) {
        //         console.log(`Logged in as: ${data.email}`);
        //     } else {
        //         console.log(data.errors);
        //     }
        //     return data;
        // } catch (error) {
        //     console.log(error);
        // }
    },
};