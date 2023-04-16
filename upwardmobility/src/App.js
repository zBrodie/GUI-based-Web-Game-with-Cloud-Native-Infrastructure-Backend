import logo from './logo.svg';
import './App.css';
import React from "react";
import { Client } from "boardgame.io/react";
import { UpwardsMobility } from "./Game";
import { UpwardMobilityBoard } from "./Board";
// import { Server } from "boardgame.io/server";
import './GamePageStyle.css';

// const server = Server({
//     games: [UpwardsMobility],
// });

// server.run(8000);

const App = Client({
    game: UpwardsMobility,
    board: UpwardMobilityBoard,
    // debug: false,
    // multiplayer: { server: "localhost:8000" },
});

export default App;

