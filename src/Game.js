import React, { Component } from 'react';
import { TweenMax, Power2, TimelineMax, SteppedEase, Back  } from 'gsap';
import Trail from './components/Trail';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this._handleOnKeyPressed = this._handleOnKeyPressed.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this._handleOnKeyPressed);

        this.timeline = new TimelineMax();

        this.timeline.addLabel('start', 0)
            .to(this.estebanbg, .78, {
                backgroundPosition: "0 -309px",
                ease: SteppedEase.config(3),
                repeat: -1
            }, 'start')
            .addLabel('run', .5)
            .to(this.sky, 100, {
                backgroundPosition: '1000% 0',
                repeat: -1
            }, 'run')
            .to(this.greenery, 15, {
                backgroundPosition: '-1000% 0',
                repeat: -1
            }, 'run')
            .staggerTo('[id^="flower"]', 2, {
                cycle: { rotation: [360, -360] },
                transformOrigin: '50% 50%',
                repeat: -1
            }, .2, 'run')
            .pause();
    }

    _handleOnKeyPressed(e) {
        if(e.code === 'Space') {
            e.preventDefault();

            if(this.state.start) {
                TweenMax.to(this.esteban, .3, { y:'-=100', ease: Power2.easeOut });
                TweenMax.to(this.esteban, .3, { y:'160',  ease: Power2.easeIn, delay:.3 });
            }
            else {
                this.timeline.play();
                this.setState({ start: true });
            }
        }
    }

    _handleOnClick(e) {
        if(this.state.position === 'animate1') {
            this.setState({ position: 'animate2' });
        } else {
            this.setState({ position: 'animate1' });
        }
    }

    render() {
        return (
            <div>
                <div className="error-message">
                    <h2>
                        Oops!
                    </h2>
                    <h3>{`The page you were looking for was not found. As a consolation, here's a fun game!`}</h3>
                </div>
                <div className="gameview">
                <div className="directions">Press space to start!</div>
                    <div className="sky" ref={(sky) => { this.sky = sky; }}>
                        <div className="greenery" ref={(greenery) => { this.greenery = greenery; }}>
                            <div className="estebanwrapper" ref={(esteban) => { this.esteban = esteban; }}>
                                <div className="esteban" ref={(estebanbg) => { this.estebanbg = estebanbg; }}/>
                            </div>
                            <Trail />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
