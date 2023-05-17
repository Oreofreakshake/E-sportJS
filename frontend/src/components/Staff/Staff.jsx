import React, { useState, useEffect } from "react";

//my components
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";

const Staff = () => {
    const [auth, setAuth] = useState(true); //check if user auth state
    return (
        <>
            <div>{auth ? <Dashboard /> : <Login />}</div>
        </>
    );
};

export default Staff;
