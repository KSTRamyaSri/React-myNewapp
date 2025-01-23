import React, { useEffect, useState } from 'react'

const Orders = () => {

    const [finalCartedData, setFinalCartedData] = useState([])

    const [orders, setOrders] = useState([])


    const [msg, setMsg] = useState("")

    useEffect(() => {

        let localData = JSON.parse(localStorage.getItem('productsInCart')) || [];
        setFinalCartedData(localData);
        const loggedEmail = JSON.parse(localStorage.getItem('LoggedEmail'))
        // console.log(loggedEmail)
        let tempOrders = localData.filter(item => item.email === loggedEmail)


        if (tempOrders.length > 0) {
            setOrders(tempOrders)
        }
        else {
            setMsg("no orders found on this email")
        }




    }, []);



    // const submitHandler = (e) => {
    //     e.preventDefault();

    //     const tempOrders = finalCartedData.filter(item => item.email === enteredEmail)

    //     if (tempOrders.length>0) {
    //         setOrders(tempOrders)
    //     }
    //     else{
    //         alert("no orders found on this email")
    //     }
    //     setEnteredEmail("")



    // }

    return (
        <>
            {/* <form onSubmit={submitHandler}>
                <input type="email" name="email" value={enteredEmail} onChange={(e) => { setEnteredEmail(e.target.value) }} /> <br />
                <input type="submit" />
            </form> */}

            {
                orders.length > 0 ? (
                    <div>
                        <h2>Orders Table</h2>
                        <table border="2" className='table table-hover'>
                            <thead>
                                <tr>
                                    <th>S.no</th>
                                    <th>NAME</th>
                                    <th>QUALITY</th>
                                    <th>QUANTITY</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* using key props */}
                                {
                                    orders.map((value, index) =>


                                        <tr key={index}>
                                            <th scope='row'>{index + 1}</th>
                                            <td>{value.name}</td>
                                            <td>{value.quality}</td>
                                            <td>{value.quantity}</td>
                                        </tr>


                                    )}

                            </tbody>

                        </table>
                    </div>
                ) : ( <h2>{msg}</h2> )
            }


        </>
    )
}

export default Orders