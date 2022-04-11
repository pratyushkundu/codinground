import React from "react";
import { useLocation } from "react-router-dom";


function SecondPage() {
    const location = useLocation();

    const searchData = new URLSearchParams(location.search);

    console.log(searchData.get('data'));

    return  (<>
        <h1> he visited to</h1>
        <h1>{searchData.get('data')}</h1>
        </>
    )
}

export default SecondPage;