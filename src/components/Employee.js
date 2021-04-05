import React,{useState, useContext} from 'react'
import './Employee.css';
import employee from '../images/Employee.png';
import { AuthContext } from '../reducer/reducer';

function Employee() {
    const { dispatch } = useContext(AuthContext);

    const[name,setname] = useState("");
    const[gender,setGender] = useState(" ");
    const[mobile,setMobile] = useState(0);
    const[State,setState]= useState("Chennai");
    const[education,setEducation] = useState("");
    const[address,setAddress] = useState("");
    const[languages,setLanguages] = useState({
        english: false,
        tamil:false,
        telugu:false,
        hindi:false,
        malayalam:false

    });
    const[error,setError] = useState('');

    const changeLanguage=(e)=>{
        const currentState = languages[e.target.name];
        if(currentState){
            setLanguages({...languages,[e.target.name]:false});
        }else{
            setLanguages({...languages,[e.target.name]:true});
        }
    }

    const reset=()=>{
        console.log(name+" "+gender+" "+address);
        setname('');
        setGender('');
        setMobile(0);
        setEducation('');
        setAddress('');
        setState('Chennai');
        setLanguages({
            english: false,
            tamil:false,
            telugu:false,
            hindi:false,
            malayalam:false
        });

    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        //validations
        if(name.trim() === '' || gender.trim() === '' || mobile.trim() === '' || education.trim() ==="" || address.trim() ===""){
            setError("Please fill all fields");
            return;
        }else if(languages.english=== false && languages.hindi=== false && languages.malayalam=== false && languages.tamil=== false && languages.telugu=== false){
            console.log(languages.english);
            setError("Minimum 1 language required");
            return;
        }else if(name.length<3){
            setError("Minimum 3 characters required for Username");
            return;
        }else{
            setError('');
        }

        //gathering data
        const English = languages.english ? "English " : "";
        const Tamil = languages.tamil ? "Tamil " : "";
        const Telugu = languages.telugu ? "Telugu " : "";
        const Hindi = languages.hindi ? "Hindi " : "";
        const Malayalam = languages.malayalam ? "Malaiyalam " : "";
        var lang = English + Tamil + Telugu + Hindi +Malayalam;
        const langsplitter = lang.split(" "); // splitting languages
        console.log(langsplitter);
        if(langsplitter.length>2){
           lang= langsplitter.join(", "); // merging languages
        }

        //getting serial no from previous data
        const storedvalue = JSON.parse(localStorage.getItem('empdata')); 
        const empid = (Number)(storedvalue[storedvalue.length-1].sno) + 1;
        const values=[{
            name,
            Gender:gender,
            Education:education,
            Address:address,
            Languages:lang,
            date: Date.now().toString(),
            sno:empid
        }];
        const newValue= storedvalue.concat(values);
        localStorage.setItem('empdata',JSON.stringify(newValue));
        dispatch({
            type:"EMPLOYEE",
            payload:newValue
        });
        alert('submitted');
        // reset();
    }
    

    return (
        <div className="employee_">
            <div className="employee__emp">
                <div className="employee__details">
                    <h2>Employee</h2>
                    <p>Information</p>
                </div>
                <img src={employee} width="150px" alt="employee" />
            </div> 
            <div className="employee__form">
                <div className="error">{error}</div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputName">Full name <span style={{color: "red"}}>*</span></label>
                        <input type="text" value={name} className="form-control" id="exampleInputName" onChange={(e)=>setname(e.target.value)} aria-describedby="emailHelp" placeholder="Type your name" required/>
                    </div>
                    <div className="form-group">
                        Radio
                        <div className="radio_flex">
                            <div className="pr-5">
                                <input required type="radio" checked={gender === "Male"} onChange={()=>setGender("Male")} name="Male" id="Male"/>
                                <label htmlFor="Male">Male</label>
                            </div>
                            <div>
                                <input required type="radio" checked={gender === "Female"} onChange={()=>setGender("Female")}  name="Female" id="Female"/>
                                <label htmlFor="Female">Female</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputMobile">Mobile<span style={{color: "red"}}>*</span></label>
                        <input required type="number" value={mobile} onChange={(e)=>setMobile(e.target.value)}  className="form-control" id="exampleInputMobile" placeholder="number"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEducation">Educational Qualification</label>
                        <input required type="text" value={education} onChange={(e)=>setEducation(e.target.value)} className="form-control" id="exampleInputEducation" placeholder="Type your Qualification"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">State</label>
                        <select className="form-control" value={State} onChange={(e)=>setState(e.target.value)} id="exampleFormControlSelect1">
                        <option>Chennai</option>
                        <option>Banglore</option>
                        <option>Hyderabad</option>
                        <option>Pune</option>
                        <option>Mumbai</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Address</label>
                        <textarea required className="form-control" value={address} onChange={(e)=>setAddress(e.target.value)} id="exampleFormControlTextarea1" rows="6" placeholder="Type your Address"/>
                    </div>
                    <div className="form-group">

                        <label htmlFor="00">Languages Known</label>
                        <div className="d-flex justify-content-between flex-wrap lang__">

                            <div className="form-check">
                                <input className="form-check-input" name="english" checked={languages.english} onChange={changeLanguage} type="checkbox" value="" id="defaultCheck1"/>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    English
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" name="tamil" checked={languages.tamil} onChange={changeLanguage} type="checkbox" value="" id="defaultCheck2"/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    Tamil
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" name="telugu" checked={languages.telugu} onChange={changeLanguage} type="checkbox" value="" id="defaultCheck3"/>
                                <label className="form-check-label" htmlFor="defaultCheck3">
                                    Telugu
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" name="hindi" checked={languages.hindi} onChange={changeLanguage} type="checkbox" value="" id="defaultCheck4"/>
                                <label className="form-check-label" htmlFor="defaultCheck4">
                                    Hindi
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" name="malayalam" checked={languages.malayalam} onChange={changeLanguage} type="checkbox" value="" id="defaultCheck5"/>
                                <label className="form-check-label" htmlFor="defaultCheck5">
                                    Malayalam
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="btn-group">
                        <button type="button" onClick={reset} className="btn_reset">RESET</button>
                        <button type="button" onClick={handleSubmit} className="btn_submit">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Employee
