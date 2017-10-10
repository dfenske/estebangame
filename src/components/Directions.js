import React from 'react';

const Directions = () => {
    let startMessage = 'Press space to play!';
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        startMessage = 'Tap to play!';
    }

    return (
        <div className="overlay overlay--directions">
            <div className="overlay__message">
                <p className="overlay__detail">{`Purple squirrels are hard to come by, but we've got one! Help our purple squirrel collect all the coins.`}</p>
                <p className="overlay__cta">{startMessage}</p>
            </div>
        </div>
    );
};

export default Directions;
