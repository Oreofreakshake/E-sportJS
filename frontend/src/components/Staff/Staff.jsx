import React, { useState, useEffect } from "react";

//my components
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import cookies from "js-cookie";

const Staff = () => {
    const [auth, setAuth] = useState(cookies.get("auth")); //check if user auth state
    return (
        <>
            <div>{auth ? <Dashboard /> : <Login />}</div>
        </>
    );
};

export default Staff;
