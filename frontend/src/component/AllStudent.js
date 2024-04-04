import React, { useState, useEffect} from "react";
import axios from "axios";


export default function AllStudents(){

    const [students, setStudents] = useState([]);

    useEffect(()=> {
        function getStudents() {
            axios.get("http://localhost:8080/student/").then((res)=> {
                setStudents(res.data);
                console.log(res.data);
            }).catch((err)=> {
                alert(err.message);
            })
        }
        getStudents();
    }, [])
    return (
        <div>
            <h1>All Students</h1>
            {students.map((student)=>(
                    <p>Student first name: {student.firstname} | last name :{student.lastname} | email: {student.email}</p>
            )) }
            
        </div>
    )
}