import { useEffect, useState } from "react";
import axios from 'axios';
function Student() {

    const [id, setId] = useState('');
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [fee, setFee] = useState("");
    const [students, setUsers] = useState([]);


    useEffect(() => {
        (async () => await Test())();
    }, []);

    async function Test() {
        axios.get('http://127.0.0.1:8000/booking')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }

    async function Load() {
        const result = await axios.get(
            "http://127.0.0.1:8000/student");
        setUsers(result.data);
        console.log(result.data);
    }


    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/student",
                {

                    name: name,
                    address: address,
                    fee: fee

                });
            alert("Student Registation Successfully");
            setId("");
            setName("");
            setAddress("");
            setFee("");
            Load();



        }
        catch (err) {
            alert("Student Registation Failed");
        }
    }



    async function editStudent(students) {
        setName(students.name);
        setAddress(students.address);
        setFee(students.fee);
        setId(students.id);

    }
    async function DeleteStudent(id) {

        await axios.delete("http://127.0.0.1:8000/student/" + id);
        alert("Student deleted Successfully");
        setId("");
        setName("");
        setAddress("");
        setFee("");
        Load();


    }
    async function update(event) {
        event.preventDefault();
        try {

            await axios.put("http://127.0.0.1:8000/student/" + students.find(u => u.id === id).id || id,
                {
                    id: id,
                    name: name,
                    address: address,
                    fee: fee

                });
            alert("Student Updateddddd");
            setId("");
            setName("");
            setAddress("");
            setFee("");
            Load();

        }
        catch (err) {
            alert(" Student updateddd Failed");
        }
    }
    return (
        <div>
            <h1>Interview Dataset</h1>
            <div class="container mt-4" >
                <form>

                    <div>

                        <button class="btn btn-warning mt-4" onClick={update}>upload</button>
                    </div>


                </form>
            </div>

            <h1>School tabel</h1>
            <table class="table table-dark" align="center">
                <thead>
                    <tr>
                        <th scope="col">School Id</th>
                        <th scope="col">School Name</th>
                        
                    </tr>
                </thead>
                {students.map(function fn(student) {
                    return (
                        <tbody>
                            <tr>
                                <th scope="row">{student.id} </th>
                                <td>{student.name}</td>
                               
                            </tr>
                        </tbody>
                    );
                })}
            </table>
            <h1>Class tabel</h1>
            <table class="table table-dark" align="center">
                <thead>
                    <tr>
                        <th scope="col">Class Id</th>
                        <th scope="col">Class Name</th>
                        
                    </tr>
                </thead>
                {students.map(function fn(student) {
                    return (
                        <tbody>
                            <tr>
                                <th scope="row">{student.id} </th>
                                <td>{student.name}</td>
                                
                            </tr>
                        </tbody>
                    );
                })}
            </table>
            <h1>Assessment_Areas tabel</h1>
            <table class="table table-dark" align="center">
                <thead>
                    <tr>
                        <th scope="col">School Id</th>
                        <th scope="col">School Name</th>
                        
                    </tr>
                </thead>
                {students.map(function fn(student) {
                    return (
                        <tbody>
                            <tr>
                                <th scope="row">{student.id} </th>
                                <td>{student.name}</td>
                                
                            </tr>
                        </tbody>
                    );
                })}
            </table>
            <h1>Student tabel</h1>
            <table class="table table-dark" align="center">
                <thead>
                    <tr>
                        <th scope="col">Student Id</th>
                        <th scope="col">Student Name</th>
                        
                    </tr>
                </thead>
                {students.map(function fn(student) {
                    return (
                        <tbody>
                            <tr>
                                <th scope="row">{student.id} </th>
                                <td>{student.name}</td>
                                
                            </tr>
                        </tbody>
                    );
                })}
            </table>
            <h1>Answer tabel</h1>
            <table class="table table-dark" align="center">
                <thead>
                    <tr>
                        <th scope="col">Answer Id</th>
                        <th scope="col">Answer Name</th>
                        
                    </tr>
                </thead>
                {students.map(function fn(student) {
                    return (
                        <tbody>
                            <tr>
                                <th scope="row">{student.id} </th>
                                <td>{student.name}</td>
                               
                            </tr>
                        </tbody>
                    );
                })}
            </table>
            <h1>Subject tabel</h1>
            <table class="table table-dark" align="center">
                <thead>
                    <tr>
                        <th scope="col">Subject Id</th>
                        <th scope="col">Subject Name</th>
                        <th scope="col">Subject Score</th>
                        
                    </tr>
                </thead>
                {students.map(function fn(student) {
                    return (
                        <tbody>
                            <tr>
                                <th scope="row">{student.id} </th>
                                <td>{student.name}</td>
                                <td>{student.address}</td>
                                
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
}
export default Student;