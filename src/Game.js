import Game from 'boardgame.io/game'
import { useState } from 'react';
import { TurnOrder , Step } from 'boardgame.io/core';
import RollButton from './RollButton';

const D6 = () => Math.floor(Math.random() * 6) + 1;

export const upwardsmobility = Game({
    setup: () => ({ cells: Array([50, 2]).file(null),
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
           diceRoll(G, ctx, currentPlayer);

        },
        move: (G, ctx) => {
            let currentPosition = G.players[ctx.currentPlayer].position;
            let newPosition = currentPosition[0] + G.die1 + G.die2;
            let DontChange = currentPosition[1]
            G.players[ctx.currentPlayer].position = [newPosition, DontChange]
            return G
        }

    }
})

const diceRoll = (G, ctx, currentPlayer) => {
    return {...G, die1: D6(), die2: D6()}
}
export default Game;