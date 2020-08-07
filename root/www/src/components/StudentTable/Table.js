import React, { useEffect, useState } from 'react';
import axios from 'axios'

import Spinner from '../Loading/Spinner';
import Column from './Column';
import Detail from './Detail';

// const students = [
//     {
//         name: "Bob",
//         repo: "GithubREPO",
//         commits: ["07-29-2020"],
//         className: "Class_goat",
//     },
//     {
//         name: "Laarry",
//         repo: "ThisfunREPO",
//         commits: ["07-16-2095"],
//         className: "Class_rapid_rabbit",
//     },
//     {
//         name: "Jon",
//         repo: "CRAZYrichREPO",
//         commits: ["01-02-1995"],
//         className: "Class_snake_rattle",
//     },
// ]



const Table = () => {
    // Create another state that gets the current student clicked on
    const [students, setStudents] = useState([]);
    // Figure out if i should return the first element in array or null or empty array
    const [currentStudent, setCurrentStudent] = useState(null)

    useEffect(() => {
        const getStudents = async () => {
            try {
                // request to api to get students object
                const { data } = await axios.get(`http://localhost:5000/api/github/commits`, {
                    params: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET',
                        'Access-Control-Request-Headers': 'Content-Type'
                    }
                });

                const students = [];
                // loops over student object and makes a request for each one using: username, repo-name
                for(let i = 0; i < data.length; i++) {
                    students.unshift({data: data[i]})
                }
                setStudents(students);
            } catch(err) {
                console.log(err.message);
            }
        };

        getStudents();
    }, [])

    useEffect(() => {
        setCurrentStudent(currentStudent)
    }, [currentStudent])

    const studentTable = (
                students.length === 0 ?
                <span>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Class Name</th>
                                <th scope="col">Repo</th>
                                <th scope="col">Current Commit</th>
                                <th scope="col"># of Commits</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Column students={students} setCurrentStudent={setCurrentStudent} />    
                        </tbody>
                    </table>
                    <Spinner />
                </span>
                :  
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Class Name</th>
                            <th scope="col">Repo</th>
                            <th scope="col">Current Commit</th>
                            <th scope="col"># of Commits</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Column students={students} setCurrentStudent={setCurrentStudent} />    
                    </tbody>
                </table>
            );

    return (
        <div>
            {studentTable}
            {/* Were going to put student detail right below table - looking at udemy */}
            {/* Here we dont want to pass in the students state, we want to pass in the current student clicked on. Make a new state for current student */}
            <Detail student={currentStudent} />
        </div>
    );
};

export default Table;

