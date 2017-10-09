import React from 'react';

const Score = (props) => {
    let { score } = props;

    return (
        <div className="score">
            <img className="score__icon" src="//cdn-payscale.com/content/estebanrun/coin.svg" />
            <span>{score}</span>
        </div>
    );
};

export default Score;
