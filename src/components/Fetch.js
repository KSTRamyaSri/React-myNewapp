import React, { useEffect, useState } from 'react'

const Fetch = () => {

    const [getData,setGetData] = useState([])
    console.log(getData,"getData")
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then(json=>setGetData(json))
    },[]);

  return (
    <>
        {
             getData.map((value, index) => <li key={index}>{value.title}</li>)
        }
    </>
  )
}

export default Fetch