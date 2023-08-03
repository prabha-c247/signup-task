import React from 'react';

const Question1 = () => {
    let flag = "false"
    console.log(flag == false)
    return (
        <div>
            <h5>   Question 1</h5>
            {flag}
            {/* it is comparing the data type variable is containing string value while console varible is conating boolean so the answr will be false*/}
        </div>
    )
}

export default Question1;