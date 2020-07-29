import React, { useEffect, useState } from 'react';
import axios from 'axios'

import Column from './Column';

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
    const [students, setStudents] = useState(null);

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
                    // figure out why params object wasn't working.
                    const student = await axios.get(`https://api.github.com/repos/${data[i].username}/${data[i].repo}`);
                    // this data needs to be pushed to DB and give a green square if dates match.
                    // console.log(`${data.owner.login} committed to ${data.name} at ${data.pushed_at}`);
                    // console.log(student)
                    // console.log(data[i])
                    // console.log(student.data.updated_at)
                    students.unshift({data: data[i], commits: [student.data.updated_at]});
                }
                setStudents(students);
            } catch(err) {
                console.log(err.message);
            }
        };

        getStudents();
    }, [])


    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">ClassName</th>
                    <th scope="col">Repo</th>
                    <th scope="col">Committed</th>
                </tr>
            </thead>
            <tbody>
                <Column students={students} />    
            </tbody>
        </table>
    );
};

export default Table;

