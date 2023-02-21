//import Game from 'boardgame.io/game'
import { useState } from 'react';
import { TurnOrder , Step } from 'boardgame.io/core';
import RollButton from './RollButton';
import flatted from 'flatted';

const D6 = () => Math.floor(Math.random() * 6) + 1;

export const upwardsmobility = {
    name: "UpwardsMobility",
    setup: () => ({
        cells: Array([50, 2]),
        name: 'Upwards Mobility',
        minPlayers:2,
        maxPlayers:4,
        players: {
        "0" : {position: [0, 0]},
        "1" : {position: [0, 1]}
        },
        turn: 0,
        die1: 0,
        die2: 0
    }),

    moves: {
        roll: (G, ctx, currentPlayer) => {
            G.die1 = Math.floor(Math.random() * 6) + 1;
            G.die2 = Math.floor(Math.random() * 6) + 1;
            return { ...G };
        },
        move: (G, ctx) => {
            const currentPlayer = ctx.currentPlayer;
            const currentPosition = G.players[currentPlayer].position;
            const newPosition = currentPosition[0] + G.die1 + G.die2;
            const dontChange = currentPosition[1];
            const newPlayers = {...G.players, [currentPlayer]: {position: [newPosition, dontChange]}};
            return {...G, players: newPlayers};
        },
        check: (G, ctx) => {
            

        }


    }
}

const diceRoll = (G, ctx, currentPlayer) => {
    return {...G, die1: D6(), die2: D6()}
}
export default upwardsmobility;