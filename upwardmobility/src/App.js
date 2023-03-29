import logo from './logo.svg';
import './App.css';
import React from "react";
import { Client } from "boardgame.io/react";
import {UpwardsMobility} from "./Game";
import {UpwardMobilityBoard} from "./Board"
import './GamePageStyle.css'

const App = Client({
    game: UpwardsMobility,
    board: UpwardMobilityBoard
});

export default App;
