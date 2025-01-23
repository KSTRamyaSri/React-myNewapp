import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DashBoard = () => {
    
    const storedData = JSON.parse(localStorage.getItem('data'));
    // const id = JSON.parse(localStorage.getItem('id'));
    
    const location = useLocation();
    const idReceived = location.state?.id;
    
    const user = storedData.find(value => value.id===idReceived?.id);
    
    return(
        <>
        
         <h1>welcome, {user.firstname} {user.lastname}</h1>

        </>
    );
};
export default DashBoard;
