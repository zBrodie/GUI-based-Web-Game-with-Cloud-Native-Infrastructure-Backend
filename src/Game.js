//import Game from 'boardgame.io/game'
import { useState } from 'react';
import { TurnOrder , Step } from 'boardgame.io/core';
import RollButton from './RollButton';
import flatted from 'flatted';

const D6 = () => Math.floor(Math.random() * 6) + 1;

export const upwardsmobility = {
    name: "UpwardsMobility",
    setup: (ctx) => ({
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
        die2: 0,
    }),

    moves: {
        roll: (G, ctx, currentPlayer) => {
            const die1 = Math.floor(Math.random() * 6) + 1;
            const die2 = Math.floor(Math.random() * 6) + 1;
            const newG = {...G, die1, die2};
            return JSON.parse(JSON.stringify(newG));
        },
        move: (G, ctx) => {
            if (!ctx) return JSON.parse(JSON.stringify(G));
            console.log(ctx);
            const currentPlayer = ctx.currentPlayer;
            const currentPosition = G.players[currentPlayer].position;
            const newPosition = currentPosition[0] + G.die1 + G.die2;
            const dontChange = currentPosition[1];
            const newPlayers = {
                ...G.players,
                [currentPlayer]: { position: [newPosition, dontChange] },
            };
            return { ...G, players: newPlayers };
        },
        check: (G, ctx) => {
            try {
                JSON.stringify(G);
                console.log('G: ', G);
            } catch (err) {
                console.error('Error in G:', err.message);
            }

            try {
                JSON.stringify(ctx);
                console.log('ctx: ', ctx);
            } catch (err) {
                console.error('Error in ctx:', err.message);
            }

        },
        endTurn: (G, ctx) => {
            return {
                ...G,
                turn: (ctx.playOrderPos + 1) % ctx.numPlayers,
            };
        }


    }
}

const diceRoll = (G, ctx, currentPlayer) => {
    return {...G, die1: D6(), die2: D6()}
}