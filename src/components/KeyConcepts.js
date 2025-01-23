import React,{useState} from 'react';

// const Ternary = () => {

//     const [data,setData]=useState(true)

//     return(
//         <>
//             {
//                 data ? <h1>It is true</h1> : <h2>It is false</h2>
//             }
//         </>
//     );
// }

// export default Ternary;


// const filters = () => {

//     const data = ['reactjs','nodejs','angular','django','vue']
//     const filterData = data.filter(value => value.includes('j'))
//     return(
//         <>
//             {
//                 filterData.map(val=> <li>{val}</li>)
//             }
//         </>
//     )

// }
// export default filters;

const Filter = () => {

    const data = [10,20,30,40,50,60]
    const filterData = data.filter(val => val>40)
    return(
        <>
            {
                filterData.map(val=> <li>{val}</li> )
            }
        </>
    )

}
export default Filter;





