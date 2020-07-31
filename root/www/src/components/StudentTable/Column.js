import React, { Fragment } from 'react';
// import Spinner from './Spinner';

const Column = ({ students }) => {
    console.log(students)

    // This sorts the Students by className - See if you can place an HR where there is a split in classes to organise
    function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const classA = a.data.className.toUpperCase();
        const classB = b.data.className.toUpperCase();
        let comparison = 0;
        if (classA > classB) {
          comparison = 1;
        } else if (classA < classB) {
          comparison = -1;
        }
        return comparison;
    }
    
    students.sort(compare);

    // BUG trying to figure out how to wait to map until students loaded
    const renderedStudents = students.map(student => {
        console.log(student)
        return (
            <tr key={student.data.name}>
                <th scope="row">{students.indexOf(student) + 1}</th>
                <td>{student.data.name}</td>
                <td>{student.data.username}</td>
                <td>{student.data.className}</td>
                <td>{student.data.repo}</td>
                <td>{student.data.commits[0]}</td>
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


