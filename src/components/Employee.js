import React from 'react'
import './Employee.css';
import employee from '../images/Employee.png';

function Employee() {
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
                <div className="error"></div>
                <form>
                    <div class="form-group">
                        <label for="exampleInputName">Full name*</label>
                        <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Type your name"/>
                    </div>
                    <fieldset class="form-group">
                        <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                                <label class="form-check-label" for="gridRadios1">
                                    Male
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                                <label class="form-check-label" for="gridRadios2">
                                    Female
                                </label>
                            </div>
                            
                        </div>
                    </fieldset>
                    <div class="form-group">
                        <label for="exampleInputMobile">Mobile*</label>
                        <input type="number" class="form-control" id="exampleInputMobile" placeholder="number"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEducation">Educational Qualification</label>
                        <input type="text" class="form-control" id="exampleInputEducation" placeholder="Type your Qualification"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">State</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Address</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Type your Address"/>
                    </div>
                    <div className="form-group">

                        <label htmlFor="00">Languages Known</label>
                        <div className="d-flex justify-content-between flex-wrap lang__">

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                <label class="form-check-label" for="defaultCheck1">
                                    English
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck2"/>
                                <label class="form-check-label" for="defaultCheck2">
                                    Tamil
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck3"/>
                                <label class="form-check-label" for="defaultCheck3">
                                    Telugu
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck4"/>
                                <label class="form-check-label" for="defaultCheck4">
                                    Hindi
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck5"/>
                                <label class="form-check-label" for="defaultCheck5">
                                    Malayalam
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="btn-group">
                        <button type="button" class="btn_reset">RESET</button>
                        <button type="button" class="btn_submit">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Employee
