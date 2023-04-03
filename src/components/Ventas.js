import React, { useState } from "react";

import "../css/Ventas.css"

const Ventas = () => {

    //comentando para ver cambios 
    const [data, setData] = useState(1);

    return (
        <div class="form-box">
            <form action="">
                <h2>Login</h2>
                <div class="register">
                    <button className="btnSave" onClick={() => setData(0)}>Save</button> 
                </div>
            </form>
        </div>


    )
}

export default Ventas