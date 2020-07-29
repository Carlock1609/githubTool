import React, { Fragment } from 'react';

const Column = ({ students }) => {
    console.log(students)
    // BUG trying to figure out how to wait to map until students loaded
    if(students === null) {
        setTimeout(() => {
            console.log('loading...')
        }, 5000)
    }

    const renderedStudents = students.map(student => {
        console.log(student)
        return (
            <tr key={student.data.name}>
                <th scope="row">{students.indexOf(student) + 1}</th>
                <td>{student.data.name}</td>
                <td>{student.data.username}</td>
                <td>{student.data.repo}</td>
                <td>{student.data.className}</td>
                <td>{student.commits.commits}</td>
            </tr>     
        );
    });

    return (
        <Fragment>
            {renderedStudents}
        </Fragment>
    );
};

export default Column;


