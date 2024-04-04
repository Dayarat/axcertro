import React, {useState} from "react";
import axios from "axios";

function AddStudent(){

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newStudent ={
            firstname,
            lastname,
            email
        }

        axios.post("http://localhost:8080/student/add",newStudent).then(()=>{
            alert("Student Added")
            setFirstname("");
            setLastname("");
            setEmail("");
            
        }).catch((err)=> {
            alert(err)
        })
    }


return(
    <div className="container">
        <form onSubmit={sendData}>
  <div className="mb-3">
    <label for="exampleInputName" className="form-label">Enter First Name</label>
    <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp"
    onChange={(e)=>{

        setFirstname(e.target.value);

    }}/>

    <div id="nameHelp" class="form-text"></div>
  </div>
  <div className="mb-3">
    <label for="exampleInputAge" className="form-label">Enter Last Name</label>
    <input type="text" className="form-control" id="exampleInputAge"
    onChange={(e)=>{

        setLastname(e.target.value);

    }}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputGender" className="form-label">Email</label>
    <input type="emai" className="form-control" id="exampleInputGender"
    onChange={(e)=>{

        setEmail(e.target.value);

    }}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
)
}

export default AddStudent;