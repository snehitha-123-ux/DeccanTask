import React from 'react';
import './Table.css';
function Table(){

    const data=[ 
        {name:"Snehitha",Email:"snehi@gmail.com",age:22,city:"Tirupati"},
        {name:"Pragathi",Email:"praggu@gmail.com",age:25,city:"Bangalore"},
        {name:"Jessy",Email:"jessy@gmail.com",age:27,city:"Tirupati"},
        {name:"Pandu",Email:"pandu@gmail.com",age:25,city:"chennai"},
        {name:"Hansika",Email:"hansi@gmail.com",age:22,city:"Bangolore"},
        {name:"Swetha",Email:"swetha@gmail.com",age:23,city:"Hyderabad"},
        {name:"Cherry",Email:"cherry@gmail.com",age:27,city:"Tirupati"},
        {name:"Poojitha",Email:"pooji@gmail.com",age:23,city:"Kurnool"},
        {name:"Hema",Email:"hema@gmail.com",age:23,city:"Vizag"},
    ];
    return (
        <div>
            <table align='center' cellPadding={10} cellSpacing={0}>
            <caption><b>USER DATA</b></caption>  
            <thead>
                 <tr>
                    <td>S.NO</td>
                    <td>NAME</td>
                    <td>EMAIL</td>
                    <td>AGE</td>
                    <td>CITY</td>
                 </tr>
                </thead>  
                <tbody>{
                        data.map((val,index) =>
                            <tr key={val.id}>
                <td>{index+1}</td>
                <td>{val.name}</td>
                <td>{val.Email}</td>
                <td>{val.age}</td>
                <td>{val.city}</td>
                </tr>
                )}  
                </tbody>
            </table>
        </div>
    )
}
export default Table;