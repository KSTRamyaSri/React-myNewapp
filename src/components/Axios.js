import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Axios = () => {

    const [data,setData] = useState([]);
    useEffect(()=>{
        const postData = { title: 'foo', body: 'bar', userId: 1 };
        axios.post('https://jsonplaceholder.typicode.com/todos')
        .then(response => setData(response.data))
    },[]);

    return(
        <>
            {
                Array.isArray(data) && data.map((item) => ( <li key={item.id}>{item.title}</li> ))
            }

        </>
    );
}

export default Axios;