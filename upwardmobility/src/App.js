import logo from './logo.svg';
import './App.css';
import React from "react";
import { Client } from "boardgame.io/react";
import {UpwardsMobility} from "./Game";
import {UpwardMobilityBoard} from "./Board"
import {disMoveDist} from "./Game";

import './GamePageStyle.css'

import {gameInfo} from "./Game";

const App = Client({
    game: UpwardsMobility,
    board: UpwardMobilityBoard
});

export default App;
