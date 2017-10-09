import React from 'react';

const Complete = (props) => {
    let { score, onReplay } = props;

    return (
        <div className="overlay overlay--complete">
            <div className="overlay__message">
                <p className="overlay__cta">{score} coins</p>
                <p className="overlay__detail">Nice job! You helped our purple squirrel maximize his earning potential and we can help you do the same!</p>
                <a className="pxl-btn" href="/wizards/choose.aspx?game-ps-404">Get Your Salary Report</a>
                <a className="overlay--complete__replay" onClick={onReplay}>Play Again</a>
            </div>
        </div>
    );
};

export default Complete;
