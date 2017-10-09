import React from 'react';

const Directions = () => {
    return (
        <div className="overlay overlay--directions">
            <div className="overlay__message">
                <p className="overlay__detail">{`Purple squirrels are hard to come by, but we've got one! Help our purple squirrel collect all the coins.`}</p>
                <p className="overlay__cta">Press space to play!</p>
            </div>
        </div>
    );
};

export default Directions;
