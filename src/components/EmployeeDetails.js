import React,{useState,useEffect,useContext} from 'react';
import './EmployeeDetails.css';
import deleteicon from '../images/Delete.png';
import { AuthContext } from '../reducer/reducer';



function EmployeeDetails() {
    const { state,dispatch } = useContext(AuthContext);
    const [LocalStorage,setLocalStorage]=useState(JSON.parse(localStorage.getItem('new-data')));
    const data = [
        {sno:"1", name :"Thara",date:"001", Gender :"Female", Education :"B.E", Address:"#11 GST road Guindy, Chennai, Tamil nadu", Languages:"English, Tamil" },
        {sno:"2", name :"John",date:"002", Gender :"Male", Education :"B.E", Address:"#11 GST road Guindy, Chennai, Tamil nadu", Languages:"English, Tamil" },
        {sno:"3", name :"Smith",date:"003", Gender :"Male", Education :"B.E", Address:"#11 GST road Guindy, Chennai, Tamil nadu", Languages:"English, Tamil" },
        {sno:"4", name :"Eswar",date:"004", Gender :"Male", Education :"B.E", Address:"#11 GST road Guindy, Chennai, Tamil nadu", Languages:"Tamil" },
        {sno:"5", name :"David",date:"005", Gender :"Male", Education :"B.E", Address:"#11 GST road Guindy, Chennai, Tamil nadu", Languages:"English, Tamil" },
        {sno:"6", name :"Kumar",date:"006", Gender :"Male", Education :"B.E", Address:"#11 GST road Guindy, Chennai, Tamil nadu", Languages:"English, Tamil" },
    ];

    useEffect(()=>{
        // console.log(localStorage.getItem('new-data'));
        // setLocalStorage(JSON.parse(localStorage.getItem('new-data')));
        // const datar = empdata
        // datar.push(JSON.parse(localStorage.getItem('new-data')));
        // console.log(datar);
        // setEmpdata(datar);
        setEmpdata(JSON.parse(localStorage.getItem('empdata')));
    },[localStorage.getItem('empdata')])


    useEffect(() => {
        var check = localStorage.getItem("empdata") ? true : false;
        console.log(check);
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
        console.log("After deletion below");
        console.log(newData);
        dispatch({
            type:'EMPLOYEE',
            payload:newData
        });
        console.log(state);
        setEmpdata(newData);
        localStorage.setItem('empdata',JSON.stringify(newData));
    }
//     useEffect(() => {
       
//         var datarule = JSON.stringify(data);
//         localStorage.setItem("empData",datarule);
//         console.log("local storage");
        
//   },[empdata]);
    
    
        
    
    // const value=(data) => (
    
    //         data.map((stored,key)=>(
    //         <tr key={key}>
    //                  <th scope="row">{stored.sno}</th>
    //                  <td>{stored.name}</td>
    //                  <td>{stored.Gender}</td>
    //                  <td>{stored.Education}</td>
    //                  <td>{stored.Address}</td>
    //                  <td>{stored.Languages}</td>
    //                  <td><img name={stored.date} onClick={removeData} src={deleteicon} alt=""/></td>
    //              </tr>
    //         ))
    // );
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
        
    // const value=(data) =>{
    //     console.log(data.employees.data);
    //     values(data.employees.data);
    // }
        
        
        
    
    return (
        <div className="EmployeeDetails">
            {/* {console.log(state)} */}
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
                {/* {console.log(empdata)} */}
                {value(empdata)}
                {/* {value(state)} */}
            </tbody>
            </table>
        </div>
    )
}

export default EmployeeDetails
