/* eslint-disable */
import React, { Fragment } from 'react';

const Commits = ({ commitLength, commitDates }) => {
    // map out the array to display green squares like github
    const displayIcons = commitDates.map((commit) => {
        return (
            <div key={commit}>
                <div className="commitIcon"></div>
            </div>
        );
    });

    return (
        <Fragment>
            <hr/>
            <div>Total Accepted Commits: {commitLength}</div>
            <div>Total Missed Commits: ???</div>
            <div className="Commits container-fluid">
                {displayIcons}
            </div>
        </Fragment>
    );
};

export default Commits;