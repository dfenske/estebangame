import React from 'react';

const Timer = (props) => {
    let { tick, duration } = props;
    let eMs = 50 * tick;
    let remaining = (duration - eMs)/1000;

    return (
        <div className="timer">{remaining.toFixed(2)} seconds</div>
    );
};

export default Timer;
