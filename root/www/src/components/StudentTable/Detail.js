import React, { Fragment } from 'react';

const Detail = ({ student }) => {
    // We want to loop over ONE student from the state pased in
    // console.log(student);
    // This is checking to see if student prop has been clicked and loaded, if it ise, map it, if not show empty string 
    // Checking to see if object is empty, if it is dont map it. 
    // HAVING ISSUES with it uploading student and then making it undefined a second later
    console.log(student)

    // This is looping over object just to check if it is existing - if it does add to counter
    let counter = 0
    if(student) {
        counter += 1
    }

    // checking possible cases to watch for, counter should be 1 and student object should exist
    const renderedStudent = (counter > 0 && student !== undefined ? 
        <div key={student.data.name}>
            <span>{student.data.name}</span>
            <span>{student.data.username}</span>
            <span>{student.data.className}</span>
            <span>{student.data.repo}</span>
            <span>Commits {student.data.commits.length}</span>
            <div>{student.data.commits}</div>
        </div>
        :
        'Not clicked'
        );

    return (
        <Fragment>
            Detail page
            <div>
                {renderedStudent}
            </div>
        </Fragment>
    );
};

export default Detail;