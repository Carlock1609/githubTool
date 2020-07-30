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
    const [students, setStudents] = useState([]);

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


    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Class Name</th>
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

