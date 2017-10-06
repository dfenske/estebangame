import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweenMax, Power2, Bounce } from 'gsap'
import Scene from './components/Scene';
import Esteban from './components/Esteban';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this._handleOnClick = this._handleOnClick.bind(this);
        this.state = {
            position: 'animate1'
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
                <div className="sky">
                    <div className="grass">
                        <Esteban/>
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
