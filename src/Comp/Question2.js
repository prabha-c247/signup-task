import React from 'react';

const Question2 = () => {
    let payload = {
        id: 3,
        firstName: 'John',
        lastName: 'Bob',
        email: 'john.doe@yopmail.com'
    }
    // var id = {};
    Object.defineProperty(payload, "id", {
        value: 1,
        writable: false
    });

    return (
        <div>
            <h5>Question 2</h5>
            {payload.id}

        </div>
    )
}

export default Question2;