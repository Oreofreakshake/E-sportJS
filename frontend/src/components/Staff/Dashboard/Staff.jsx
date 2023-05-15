import React, { useState } from "react";

//my components
import Dashboard from "./Dashboard";
import Login from "../Login/Login";

const Staff = () => {
    const [auth, setAuth] = useState(false); //check if user auth state
    return (
        <>
            <div>{auth ? <Dashboard /> : <Login />}</div>
        </>
    );
};

export default Staff;
