import React, { Fragment } from 'react';
import Commits from './Commits';

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
            <div className="row">
                <div className="col-6">
                    <div><b>Name: </b>{student.data.name}</div>
                </div>
                <div className="col-6">
                    <div><b>Class: </b>{student.data.className}</div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <div><b>Most Recent Commit: </b>{student.data.commits[0]}</div>
                </div>
                <div className="col-12">
                    <div>
                        <Commits commitLength={student.data.commits.length} commitDates={student.data.commits} />
                    </div>
                </div>
            </div>
        </div>
        :
        ''
        );

    return (
        <Fragment>
            <h4 className="text-center mt-5">Detail View</h4>
            <hr/>
            <div className="Detail container shadow-lg">
                {renderedStudent}
            </div>
        </Fragment>
    );
};

export default Detail;