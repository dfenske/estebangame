import React from 'react';
import ReactDOM from 'react-dom';
import Game from './src/Game';
import './src/styles/game.scss';
import Header from '@ps/header-footer/lib/Header';
import Footer from '@ps/header-footer/lib/Footer';
import '@ps/header-footer/lib/styles/ps-header.scss';
import '@ps/header-footer/lib/styles/ps-footer.scss';

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

ReactDOM.render(
    <Header reverse={true} />,
    document.getElementById('header')
);


ReactDOM.render(
    <Footer />,
    document.getElementById('footer')
);