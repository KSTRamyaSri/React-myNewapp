// import React, { useEffect, useState } from 'react'
// import { useLocation } from "react-router-dom";
// import { Modal } from 'react-bootstrap';

// const UserLogin = () => {

//   const location = useLocation();
//   const namesReceived = location.state?.userNames;

//   const [finalProductData, setFinalProductData] = useState([]);
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const localProductData = JSON.parse(localStorage.getItem('productData')) || [];
//     setFinalProductData(localProductData);

//   }, []);

//   const [buyProduct, setBuyProduct] = useState({
//     'name': "",
//     'quality': 0,
//     'quantity': 0,
//   });

//   const Buy = (value) => {

//     if (value.quantity > 0) {
//       setBuyProduct({
//         name: value.name,
//         quality: value.quality,
//         quantity: value.quantity,
//       });
//       setShow(true);
//       console.log('Buy product set:', buyProduct);
//     }
//     else {
//       setShow(false);
//       alert("sorry.. stock is empty... can't buy!!")
//     }

//   };

//   const [purchaseValue, setPurchaseValue] = useState(0);

//   const purchaseHandler = (e) => {
//     e.preventDefault();

//     setPurchaseValue(Number(purchaseValue));

//     console.log(purchaseValue, "purchase value");
//     console.log(buyProduct.quantity, "buyproduct.quantity");
   
//     if(buyProduct.quantity!=0){
//       if (purchaseValue <= buyProduct.quantity && purchaseValue > 0) {

//         const prevProduct = buyProduct;

//         console.log(prevProduct, "before");
//         console.log("if blockkk")

//         const updatedQuantity = buyProduct.quantity - purchaseValue

//         setBuyProduct(() => ({ ...prevProduct, quantity: prevProduct.quantity - purchaseValue, }));

//         const updatedProductData = [...finalProductData]

//         let purchaseProduct = updatedProductData.find((item) => item.name === prevProduct.name && item.quality === prevProduct.quality && item.quantity === prevProduct.quantity)

//         purchaseProduct = purchaseProduct ? purchaseProduct.quantity = updatedQuantity : ""

//         console.log(purchaseProduct, "purchase product")
//         console.log(updatedProductData, "updated product data")

//         setFinalProductData(updatedProductData);
//         localStorage.setItem("productData", JSON.stringify(updatedProductData));


//       }
//       else{
//         alert("Please enter proper purchase value... it should be less than or equal to product quantity and greater than 0")
//       }
//     }
//       else{
//         setShow(false)
//         alert("sorry.. stock is empty... can't Buy!!")
//       }
    
    
//     setPurchaseValue("")
//   };


//   return (
//     <>
//       <h1>Welcome user - {namesReceived.firstname} {namesReceived.lastname}</h1>

//       <table border="2" className='table table-hover'>
//         <thead>
//           <tr>
//             <th>S.no</th>
//             <th>NAME</th>
//             <th>QUALITY</th>
//             <th>QUANTITY</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* using key props */}
//           {finalProductData.map((value, index) =>
//             <tr key={index}>
//               <th scope='row'>{index + 1}</th>
//               <td>{value.name}</td>
//               <td>{value.quality}</td>
//               <td>{value.quantity}</td>
//               <td><button type="button" onClick={() => { Buy(value) }} className='btn btn-outline-success btn-sm'>Buy</button></td>
//             </tr>
//           )}

//         </tbody>

//       </table>

//       <Modal show={show} onHide={() => { setShow(false) }}>
//         <Modal.Header closeButton> <Modal.Title>Purchase Product</Modal.Title> </Modal.Header>
//         <Modal.Body>

//           <span>
//             <b>Product Name : </b>
//             {buyProduct.name}
//           </span><br />
//           <span>
//             <b>Product quality : </b>
//             {buyProduct.quality}
//           </span><br />
//           <span>
//             <b>Product quantity : </b>
//             {buyProduct.quantity}
//           </span> <br />

//           <div>
//             <form onSubmit={purchaseHandler}>
//               <label>Purchase : </label>
//               <input type="number" placeholder="purchase" value={purchaseValue} onChange={(e) => setPurchaseValue(e.target.value)} /> <br />
//               <input type="submit" className='btn btn-outline-secondary rounded-pill m-2 px-4' value="Buy" />
//             </form>
//           </div>


//         </Modal.Body>
//         <Modal.Footer><button onClick={() => { setShow(false) }} className='btn btn-outline-danger'>close modal</button></Modal.Footer>
//       </Modal>

//     </>
//   )
// }

// export default UserLogin


import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { Modal } from 'react-bootstrap';

const UserLogin = () => {

  const location = useLocation();
  const namesReceived = location.state?.userNames;

  const [finalProductData, setFinalProductData] = useState([]);
  const [finalCartedData, setFinalCartedData] = useState([]);
  const [show, setShow] = useState(false);
  const [confirmedProduct, setConfirmedProduct] = useState({
    'email': namesReceived.email,
    'name': "",
    'quality': 0,
    'quantity': 0,
  })

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem('productData')) || [];
    setFinalProductData(localData);
    localData = JSON.parse(localStorage.getItem('productsInCart')) || [];
    setFinalCartedData(localData);

  }, []);

  const [cartProduct, setCartProduct] = useState({
    'name': "",
    'quality': 0,
    'quantity': 0,
  });

  const AddCart = (value) => {

    if (value.quantity > 0) {
      setCartProduct({
        name: value.name,
        quality: value.quality,
        quantity: value.quantity,
      });
      setShow(true);
      console.log('Buy product set:', cartProduct);
    }
    else {
      setShow(false);
      alert("sorry.. stock is empty... can't buy!!")
    }

  };

  const [purchaseValue, setPurchaseValue] = useState(0);



  const purchaseHandler = (e) => {
    e.preventDefault();

    setPurchaseValue(Number(purchaseValue));

    console.log(purchaseValue, "purchase value");
    console.log(cartProduct.quantity, "cartproduct.quantity");

    if (cartProduct.quantity != 0) {
      if (purchaseValue <= cartProduct.quantity && purchaseValue > 0) {

        const prevProduct = cartProduct;

        console.log(prevProduct, "before");
        console.log("if blockkk")

        const updatedQuantity = cartProduct.quantity - purchaseValue

        setCartProduct(() => ({ ...prevProduct, quantity: prevProduct.quantity - purchaseValue, }));

        const updatedProductData = [...finalProductData]

        let purchaseProduct = updatedProductData.find((item) => item.name === prevProduct.name && item.quality === prevProduct.quality && item.quantity === prevProduct.quantity)

        purchaseProduct = purchaseProduct ? purchaseProduct.quantity = updatedQuantity : ""

        console.log(purchaseProduct, "purchase product")
        console.log(updatedProductData, "updated product data")

        setFinalProductData(updatedProductData);
        localStorage.setItem("productData", JSON.stringify(updatedProductData));



        let temp = {
          email: confirmedProduct.email,
          name: cartProduct.name,
          quality: cartProduct.quality,
          quantity: purchaseValue
        }
        setConfirmedProduct({
          ...temp,
        })


        const updatedCartedData = [...finalCartedData, temp]

        setFinalCartedData(updatedCartedData);

        localStorage.setItem("productsInCart", JSON.stringify(updatedCartedData))

        console.log("confirmed product", confirmedProduct)
        alert("Added to cart");
        setShow(false)


      }
      else {
        alert("Please enter proper purchase value... it should be less than or equal to product quantity and greater than 0")
      }
    }
    else {
      setShow(false)
      alert("sorry.. stock is empty... can't Buy!!")
    }


    setPurchaseValue("")
  };

  return (
    <>
      <h1>Welcome user - {namesReceived.firstname} {namesReceived.lastname}</h1>

      <table border="2" className='table table-hover'>
        <thead>
          <tr>
            <th>S.no</th>
            <th>NAME</th>
            <th>QUALITY</th>
            <th>QUANTITY</th>
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
              <td><button type="button" onClick={() => { AddCart(value) }} className='btn btn-outline-success btn-sm'>Add to Cart</button></td>
            </tr>
          )}

        </tbody>

      </table>

      <Modal show={show} onHide={() => { setShow(false) }}>
        <Modal.Header closeButton> <Modal.Title>Purchase Product</Modal.Title> </Modal.Header>
        <Modal.Body>

          <span>
            <b>Product Name : </b>
            {cartProduct.name}
          </span><br />
          <span>
            <b>Product quality : </b>
            {cartProduct.quality}
          </span><br />
          <span>
            <b>Product quantity : </b>
            {cartProduct.quantity}
          </span> <br />

          <div>
            <form>
              <label>Purchase : </label>
              <input type="number" placeholder="purchase" value={purchaseValue} onChange={(e) => setPurchaseValue(e.target.value)} /> <br />
              <input type="submit" className='btn btn-outline-secondary rounded-pill m-2 px-4' value="Add to cart" onClick={purchaseHandler} />
            </form>
          </div>


        </Modal.Body>
        <Modal.Footer><button onClick={() => { setShow(false) }} className='btn btn-outline-danger'>close modal</button></Modal.Footer>
      </Modal>



    </>
  )
}

export default UserLogin