import React, { Component } from 'react';
import { TweenMax, Power2, TimelineMax, SteppedEase, Back  } from 'gsap';
import Alert from '@ps/payscale-design/lib/Alert';
import Trail from './components/Trail';
import Message from './Message';
import Score from './Score';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this._handleOnKeyPressed = this._handleOnKeyPressed.bind(this);

        this.state = {
            start: false,
            score: 0
        };
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

    render() {
        let { score, start } = this.state;

        return (
            <div>
                <div className="container">
                    <Alert className='pxl-margin-vertical-large'
                        message={<Message />}
                        level='warning'
                        close={false} />
                </div>
                <div className="gameview">
                    { start ? null : <div className="directions">Press space to start!</div> }
                    <div className="sky" ref={(sky) => { this.sky = sky; }}>
                        <div className="greenery" ref={(greenery) => { this.greenery = greenery; }}>
                            <div className="estebanwrapper" ref={(esteban) => { this.esteban = esteban; }}>
                                <div className="esteban" ref={(estebanbg) => { this.estebanbg = estebanbg; }}/>
                            </div>
                            <Trail />
                        </div>
                    </div>
                    <Score score={score} />
                </div>
            </div>
        );
    }
}
