import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



function FirstPage() {

    const [data, setData] = useState('');
    const navigate = useNavigate();

    function onClick(e) {
        navigate('/second?data='+data);
    }

    return  (
        <>
            <h1>he visited to </h1>
            <input name="data" value={data} onChange={(e) => setData(e.target.value)}/>
            <button onClick={onClick}>Submit</button>
       </> 
    )
}

export default FirstPage;