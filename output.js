import React from 'react';
import OutputRow from './outputRow';

const Output = (props) => {
    return (
        <div>
            <OutputRow value={props.user} textSize={{ fontSize: '30px' }} />
            <OutputRow value={props.answer} textSize={{ fontSize: '40px', fontWeight: 'bold' }} />
        </div>
    );
}

export default Output;
