import React from 'react';

import classes from './Input.css';

const input = (props) => {

    let inputElement = null;
    switch (props.inputtype) {
        case('input'): inputElement = <input className={classes.InputElement} {...props} />;
        break;
        case('textarea'): inputElement = <textarea className={classes.InputElement} {...props} />;
        break;
        default: inputElement = <input className={classes.InputElement} {...props} />
    }

    return(
        <div className={classes.Input}>
        <labal className={classes.Label}>{props.label}</labal>
        {inputElement}
    </div>
    )

};

export default input;