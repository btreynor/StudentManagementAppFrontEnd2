import React, { useEffect, useState } from 'react'
import StudentService from '../services/StudentService'
import { Link, useNavigate, useParams } from 'react-router-dom'

const AddStudentComponent = () => {
  
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const [studentIdNo, setStudentIdNo] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();

    const studentData = { firstName, lastName, emailId, studentIdNo };

    function saveStudent(e) {
        e.preventDefault();

        if (studentData.firstName !== "" && studentData.lastName !== "" && studentData.emailId !== "" && studentData.studentIdNo !== "") {

            if(id) {
                StudentService.updateStudent(id, studentData)
                    .then(navigate('/students'))
                    .catch(e => console.log(e));
            } else {
                StudentService.saveStudent(studentData)
                .then(navigate('/students'))
                .catch(e => console.log(e));
            }     

        } else {
            alert("Please, fill in all inputs.");
        }
    }

    function tile() {
        if (id) {
            return "Update student";
        } else {
            return "Add Student";
        }
    }

    useEffect(() => {
        if (id) {
            StudentService.getStudentById(id)
            .then(res => {
                setFirstName(res.data.firstName)
                setLastName(res.data.setLastName)
                setEmailId(res.data.setEmailId)
                setStudentIdNo(res.data.setStudentIdNo)
            })
            .catch(e => console.log(e));
        }
    },[id]);

    return (
    <div>
        <br /><br />
        <div className = "container mt-5">
            <div className = "row">
                <div className = "card col-md-6 offset-md-3">
                    <h2 className='text-center'>{tile()}</h2>
                    <div className = "card-body">
                        <form>
                            <div className = "form-group mb-2">
                                <label className = "form-label"> First Name: </label>
                                <input
                                    type = "text"
                                    placeholder= "Enter First Name"
                                    name= "firstName"
                                    className = "form-control"
                                    value = { firstName || "" }
                                    onChange = {e => setFirstName(e.target.value)} />
                            </div>

                            <div className = "form-group mb-2">
                                <label className = "form-label"> Last Name: </label>
                                <input
                                    type = "text"
                                    placeholder= "Enter Last Name"
                                    name= "lastName"
                                    className = "form-control"
                                    value = { lastName || "" }
                                    onChange = {e => setLastName(e.target.value)} />
                            </div>

                            <div className = "form-group mb-2">
                                <label className = "form-label"> Email ID: </label>
                                <input
                                    type = "email"
                                    placeholder= "Enter Email ID"
                                    name= "emailId"
                                    className = "form-control"
                                    value = { emailId || "" }
                                    onChange = {e => setEmailId(e.target.value)} />
                            </div>

                            <div className = "form-group mb-2">
                                <label className = "form-label"> Student ID Number </label>
                                <input
                                    type = "text"
                                    placeholder= "Enter Student ID Number"
                                    name= "studentIdNo"
                                    className = "form-control"
                                    value = { studentIdNo  || "" }
                                    onChange = {e => setStudentIdNo(e.target.value)} />
                            </div>
                            <button onClick = {(e) => saveStudent(e)} className = "btn btn-success" > Submit </button> {" "}
                            <Link to={"/students"} className ="btn btn-danger" href=""> Cancel </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>       
    </div>
  )
}

export default AddStudentComponent