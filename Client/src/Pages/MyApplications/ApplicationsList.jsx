import React, { use } from 'react';

const ApplicationsList = ({myApplicationPromise}) => {
    const applications=use(myApplicationPromise);
    return (
        <div>
            <h1>Job applyed so far {applications.length}</h1>
        </div>
    );
};

export default ApplicationsList;