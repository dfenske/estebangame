import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweenMax, Power2, Bounce, TimelineMax } from 'gsap'
import Trail from './components/Trail';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this._handleOnClick = this._handleOnClick.bind(this);
        this._handleOnKeyPressed = this._handleOnKeyPressed.bind(this);

        this.state = {
            position: 'animate1'
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this._handleOnKeyPressed);

        this.timeline = new TimelineMax();

        this.timeline.addLabel('start')
            .to(this.sky, 400, {
                backgroundPosition: '1000% 0',
                repeat: -1
            }, 'start')
            .to(this.greenery, 250, {
                backgroundPosition: '-1000% 0',
                repeat: -1
            }, 'start')
            .staggerTo("[id^='flower']", 2, {
                cycle: { rotation: [360, -360] },
                transformOrigin: "50% 50%",
                repeat: -1
            }, .2, 'start')
            .to(this.trail.coin, 8, {
                left: 0
            })
            .play();
    }

    _handleOnKeyPressed(e) {
        if(e.code === 'Space') {
            e.preventDefault();

            TweenMax.to(this.trail.esteban, .3, {y:"-=300", ease: Power2.easeOut});
            TweenMax.to(this.trail.esteban, .3, {y:"0",  ease: Power2.easeIn, delay:.3});
        }
    }

    _handleOnClick(e) {
        if(this.state.position === 'animate1') {
            this.setState({position: 'animate2'});
        } else {
            this.setState({position: 'animate1'});
        }
    }

    _jump(e) {
        TweenMax.to('#esteban-chestnut', .3, {y:"-=300", ease: Power2.easeOut});
        TweenMax.to('#esteban-chestnut', .3, {y:"150",  ease: Power2.easeIn, delay:.3});
    }

    render() {
        return (
            <div>
                <div className="gameview">
                    <div className="sky" ref={(sky) => { this.sky = sky; }}>
                        <div className="greenery" ref={(greenery) => { this.greenery = greenery }}>
                            <Trail ref={(trail) => { this.trail = trail }}/>
                        </div>
                    </div>
                </div>

                <div>
                    <button className="btn" onClick={this._handleOnClick.bind(this)}>Animate!</button>
                    <button className="btn" onClick={this._jump.bind(this)}>Jump!</button>
                </div>
                <div>
                    <svg className={this.state.position} x="0" y="0" viewBox="0 0 200 300" height="200" width="200">
                      <circle className="shape circle" cx="50" cy="50" r="40"/>
                      <rect className="shape square" x="0" y="100" height="100" width="100" />
                    </svg>
                </div>
                <div>
                    <svg x="0" y="400" viewBox="0 0 500 500" height="500" width="500">
                        <rect className="shape square" x="0" y="100" ref="myDiv" height="100" width="100" fill="red"/>
                    </svg>
                </div>
            </div>
        );
    }
}
