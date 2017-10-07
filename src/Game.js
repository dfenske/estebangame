import React, { Component } from 'react';
import { TweenMax, Power2, TimelineMax, SteppedEase, Back, Power0  } from 'gsap';
import Alert from '@ps/payscale-design/lib/Alert';
import Trail from './components/Trail';
import Message from './Message';
import Score from './Score';
import Coin from './components/Coin';
import Complete from './Complete';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this._handleOnKeyPressed = this._handleOnKeyPressed.bind(this);
        this.flyCoin = this.flyCoin.bind(this);
        this.collectCoin = this.collectCoin.bind(this);
        this.stopGame = this.stopGame.bind(this);
        this.pauseTimeline = this.pauseTimeline.bind(this);

        this.state = {
            coinsFlying: false,
            numCoins: 10,
            score: 0,
            started: false,
            stopping: false,
            stopped: false
        };
    }

    componentDidMount() {
        const esteban = this.esteban;
        const collectCoin = this.collectCoin;
        let coins = [];

        for(let i = 0; i < this.state.numCoins; i++) {
            coins.push({
                element: this[`coin${i}`].svg,
                id: `coin${i}`
            });
        }

        document.addEventListener('keydown', this._handleOnKeyPressed);

        this.timeline = new TimelineMax();

        this.timeline.addLabel('start', 0)
            .to(this.estebanbg, .78, {
                backgroundPosition: "0 -224.55px",
                ease: SteppedEase.config(3),
                repeat: -1
            }, 'start')
            .addLabel('run', .5)
            .to(this.sky, 120, {
                backgroundPosition: '200% 0',
                repeat: -1,
                force3D: true,
                ease: Power0.easeInOut
            }, 'run')
            .to(this.greenery, 20, {
                backgroundPosition: '-200% 0',
                repeat: -1,
                force3D: true,
                ease: Power0.easeInOut
            }, 'run')
            .staggerTo('[id^="flower"]', 2, {
                cycle: { rotation: [360, -360] },
                transformOrigin: '50% 50%',
                repeat: -1
            }, .2, 'run')
            .pause();

        (function hitDetection() {
            const estebanCoords = esteban.getBoundingClientRect();

            function intersectRect(a, b) {
                if(a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top) {
                    return true;
                }

                return false;
            }

            coins.forEach((coin) => {
                let coords = coin.element.getBoundingClientRect();

                if(intersectRect(estebanCoords, coords)) {
                    collectCoin(coin.element, coin.id);
                }
            });

            requestAnimationFrame(hitDetection);
        }());
    }

    componentDidUpdate() {
        let { started, coinsFlying, numCoins } = this.state;

        if(started && !coinsFlying) {
            for(let i = 0; i < numCoins; i++) {
                this.flyCoin(this[`coin${i}`].svg, `coin${i}`);
            }
        }
    }

    collectCoin(el, id) {
        const { score } = this.state;

        if(this.state[id]) {
            let newState = { score: score + 1 };
            newState[id] = false;
            this.setState(newState);

            TweenMax.to(el, .5, {
                y: -30,
                x: -30
            });
        }
    }

    getRandomYCoordinate() {
        const random = Math.floor(Math.random() * 7);
        return random * 30 + 40;
    }

    flyCoin(el, id) {
        if(this.state.stopping) {
            return;
        }

        let newState = { coinsFlying: true };
        const delay = Math.floor(Math.random() * 5)/3;
        const y = this.getRandomYCoordinate();

        newState[id] = true;
        this.setState(newState);

        TweenMax.fromTo(el, 4, {
          rotation:0,
          y: y,
          x: window.innerWidth + 200,
          visibility: 'visible'
        }, {
          x: -200,
          y: y,
          rotation: 360,
          delay: delay,
          ease: Power0.easeInOut,
          onComplete: this.flyCoin,
          onCompleteParams: [el, id]
        });
    }

    pauseTimeline() {
        this.timeline.pause();
        this.setState({ stopped: true });
    }

    stopGame() {
        setTimeout(this.pauseTimeline, 4000);
        this.setState({ stopping: true });
    }

    _handleOnKeyPressed(e) {
        if(e.code === 'Space') {
            e.preventDefault();

            if(this.state.started) {
                TweenMax.to(this.esteban, .3, { y:'-=100', ease: Power2.easeOut });
                TweenMax.to(this.esteban, .3, { y:'220',  ease: Power2.easeIn, delay:.3 });
            }
            else {
                setTimeout(this.stopGame, 5000);
                this.timeline.play();
                this.setState({ started: true });
            }
        }
    }

    render() {
        let { score, started, numCoins, stopped } = this.state;
        let coins = [];

        for(let i = 0; i < numCoins; i++) {
            coins.push(<Coin key={i} ref={(coin) => { this[`coin${i}`] = coin; }} />);
        }

        return (
            <div>
                <div className="container">
                    <Alert className='pxl-margin-vertical-large'
                        message={<Message />}
                        level='warning'
                        close={false} />
                </div>
                <div className="gameview">
                    { started ? null :
                        <div className="directions">
                            <div>
                                <p className="detail">{`Purple squirrels are hard to come by, but we've got one! Help our purple squirrel collect all the coins.`}</p>
                                <p className="play">Press space to play!</p>
                            </div>
                        </div> }
                    { stopped ? <Complete score={score} /> : null }
                    <div className="sky" ref={(sky) => { this.sky = sky; }}>
                        <div className="greenery" ref={(greenery) => { this.greenery = greenery; }}>
                            <div className="estebanwrapper" ref={(esteban) => { this.esteban = esteban; }}>
                                <div className="esteban" ref={(estebanbg) => { this.estebanbg = estebanbg; }}/>
                            </div>
                            <Trail />
                            {coins}
                        </div>
                    </div>
                    <Score score={score} />
                </div>
            </div>
        );
    }
}
