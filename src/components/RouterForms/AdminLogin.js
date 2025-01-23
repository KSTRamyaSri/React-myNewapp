import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { Modal } from 'react-bootstrap';

const AdminLogin = () => {

    const location = useLocation();
    const namesReceived = location.state?.adminNames;

    const [btn, setBtn] = useState("Submit")
    const [show, setShow] = useState(false)
    const [productData, setProductData] = useState({
        'name': "",
        'quality': '',
        'quantity': '',
    })

    let { name, quality, quantity } = productData;

    let [finalProductData, setFinalProductData] = useState([]);

    useEffect(() => {
        const local_data = JSON.parse(localStorage.getItem('productData')) || [];
        setFinalProductData(local_data);
    }, []);

    const changeHandler = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();


        if (btn === "Submit") {
            const updatedProductData = [...finalProductData, productData];
            setFinalProductData(updatedProductData)
            console.log(updatedProductData)
            localStorage.setItem("productData", JSON.stringify(updatedProductData))


            // localstorage lo bane store avuthundhi kani browser lo refresh chesthene current enter chesina names kanipisthunnai
            // finalNames = [...finalNames,enteredName]

            // browser lo update avuthundhi kaani localstorage loo sarigga store avvatledhu late gaa avuthundhi        
            // setFinalNames([...finalNames,enteredName])

            // localStorage.setItem("names",JSON.stringify(finalNames))
            // console.log(finalNames)
        }
        else if (btn === "Update") {
            const updatedProductData = finalProductData.map(item => (item === selectedData ? productData : item));
            setFinalProductData(updatedProductData);
            localStorage.setItem("productData", JSON.stringify(updatedProductData));

        }
        setProductData({
            name: "",
            quality: "",
            quantity: "",
        })

    }


    const [temp,setTemp] = useState() ;

    const deleteModal = (value) => {
        setShow(true)
       setTemp(value)
    }

    const deleteProduct = () =>{
    //    setShow(false)
        // using filter method
        setShow(false);
        console.log("temp", temp)
        const updatedProductData = finalProductData.filter(item => item != temp);

        // // using splice method
        // // const updatedProductData = [...finalProductData]; 
        // // updatedProductData.splice(updatedProductData.indexOf(deletedData),1);
        console.log(updatedProductData)
        setFinalProductData(updatedProductData);
        localStorage.setItem("productData", JSON.stringify(updatedProductData));
        // alert("Product deleted")
       
 
    }

    const [selectedData, setSelectedData] = useState({})

    const editProduct = (value) => {
        console.log(value)
        setProductData({
            name: value.name,
            quality: value.quality,
            quantity: value.quantity,
        })
        setBtn("Update")
        setSelectedData(value)
    }

    return (
        <>
            <h1>welcome Admin - {namesReceived.firstname} {namesReceived.lastname}</h1>

            <form onSubmit={submitHandler}>
                <label>Product Name : </label>
                <input type="text" name="name" value={name} onChange={changeHandler} required /> <br />

                <label>Product Quality : </label>
                <input type="number" name="quality" value={quality} onChange={changeHandler} required /> <br />

                <label>Product Quantity : </label>
                <input type="number" name="quantity" value={quantity} onChange={changeHandler} required /> <br />

                <input type="submit" value={btn} />
            </form>

            <table border="2" className='table table-hover'>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>NAME</th>
                        <th>QUALITY</th>
                        <th>QUANTITY</th>
                        <th>Actions</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* using key props */}
                    {finalProductData.map((value, index) =>
                        <tr key={index}>
                            <th scope='row'>{index + 1}</th>
                            <td>{value.name}</td>
                            <td>{value.quality}</td>
                            <td>{value.quantity}</td>
                            <td><button onClick={() => {editProduct(value)}}>Edit</button></td>
                            <td><button onClick={() => deleteModal(value)}>Delete</button></td>
                        </tr>
                    )}

                </tbody>

            </table>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Deleting product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Are you sure want to delete</h4>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => {  deleteProduct()} }>Yes</button>
                    <button onClick={() => { setShow(false) }}>No</button>
                </Modal.Footer>

            </Modal>


        </>

    );
}

export default AdminLogin