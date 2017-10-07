import React from 'react';

const Score = (props) => {
    let { score } = props;

    return (
        <div className="score">
            <img src="/src/components/coin.svg" />
            <span>{score}</span>
        </div>
    );
};

export default Score;
