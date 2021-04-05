import React,{useState,useEffect,useContext} from 'react';
import './EmployeeDetails.css';
import deleteicon from '../images/Delete.png';
import { AuthContext } from '../reducer/reducer';
import {data } from '../storage';


function EmployeeDetails() {
    const { state,dispatch } = useContext(AuthContext);

    useEffect(()=>{
        setEmpdata(JSON.parse(localStorage.getItem('empdata')));
    },[localStorage.getItem('empdata')])


    useEffect(() => {
        var check = localStorage.getItem("empdata") ? true : false;
        if(check){
            const storedData = JSON.parse(localStorage.getItem("empdata"));
            setEmpdata(storedData)
        }else{
           localStorage.setItem("empdata",JSON.stringify(data));
           setEmpdata(data)
        }  
    }, []);

    const[empdata,setEmpdata]= useState(data);

    const removeData = (e)=>{
        const newData = empdata.filter(data=>data.date !== e.target.name);
        dispatch({
            type:'EMPLOYEE',
            payload:newData
        });
        setEmpdata(newData);
        localStorage.setItem('empdata',JSON.stringify(newData));
    }
    const value=(data) => (
        data.map((stored,key)=>(
            <tr key={key}>
                <th scope="row">{stored.sno}</th>
                <td>{stored.name}</td>
                <td>{stored.Gender}</td>
                <td>{stored.Education}</td>
                <td>{stored.Address}</td>
                <td>{stored.Languages}</td>
                <td><img name={stored.date} onClick={removeData} src={deleteicon} alt=""/></td>
            </tr>
        ))
    );      
    
    return (
        <div className="EmployeeDetails">
            <h3>Employee Details</h3>
            <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">S.No</th>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Education</th>
                <th scope="col">Address</th>
                <th scope="col">Languages Known</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                
                {value(empdata)}
            </tbody>
            </table>
        </div>
    )
}

export default EmployeeDetails
