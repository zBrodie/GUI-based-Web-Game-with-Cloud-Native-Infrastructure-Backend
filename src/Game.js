//import Game from 'boardgame.io/game'
import { useState } from 'react';
import { TurnOrder , Step } from 'boardgame.io/core';
import RollButton from './RollButton';
import flatted from 'flatted';
import { Client } from 'boardgame.io/react';

const D6 = () => Math.floor(Math.random() * 6) + 1;
export const upwardsmobility = {

    name: "UpwardsMobility",
    setup: (ctx) => {
        console.log("Setup function called!");
        return{
        cells: Array([50, 2]),
        name: 'Upwards Mobility',
        minPlayers: 2,
        maxPlayers: 4,
        players: {
            "0": {position: [0, 0]},
            "1": {position: [0, 1]}
        },
        currentPlayer: '0',
        turn: 0,
        die1: 0,
        die2: 0,
    }
    },

    moves: {
        roll: (G, ctx, currentPlayer) => {
            const die1 = Math.floor(Math.random() * 6) + 1;
            const die2 = Math.floor(Math.random() * 6) + 1;
            const newG = {...G, die1, die2};
            return JSON.parse(JSON.stringify(newG));
        },
        move: (G, ctx) => {
            const currentPlayer = ctx.currentPlayer;
            const currentPosition = G.players[currentPlayer.toString()].position;
            const newPosition = currentPosition[0] + G.die1 + G.die2;
            const dontChange = currentPosition[1];
            const newPlayers = {
                ...G.players,
                [currentPlayer.toString()]: { position: [newPosition, dontChange] },
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
