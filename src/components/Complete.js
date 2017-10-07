import React from 'react';

const Complete = (props) => {
    let { score } = props;

    return (
        <div className="complete">
            <div>
                <p className="final-score pxl-text-uppercase">{score} coins</p>
                <p className="copy">Nice job! You helped our purple squirrel maximize his earning potential and we can help you do the same!</p>
                <a className="pxl-btn" href="/wizards/choose.aspx?game-ps-404">Find Your True Worth</a>
                <a href="/hr">Comp Managers: Click Here</a>
            </div>
        </div>
    );
};

export default Complete;
