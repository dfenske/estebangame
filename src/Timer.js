import React from 'react';

const Timer = (props) => {
    let { tick } = props;

    return (
        <div className="timer">{((15000 - (50*tick))/1000).toFixed(2)} seconds</div>
    );
};

export default Timer;
