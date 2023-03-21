//import Game from 'boardgame.io/game'
import { useState } from 'react';
import { TurnOrder , Step } from 'boardgame.io/core';
import RollButton from './RollButton';
import flatted from 'flatted';
import { Client } from 'boardgame.io/react';

const D6 = () => Math.floor(Math.random() * 6) + 1;
export const upwardsmobility = {

    name: "UpwardsMobility",
    setup: () => {
        console.log("Setup function called!");
        return{
        cells: Array(50),
        name: 'Upwards Mobility',
        minPlayers: 2,
        maxPlayers: 4,
        players: {
            "0": {position: 0},
            "1": {position: 0}
        },
        currentPlayer: '0',
        turn: 0,
        die1: 0,
        die2: 0,
    }
    },

    moves: {
        roll: ({G, ctx}, id) => {
            let d1 = Math.floor(Math.random() * 6) + 1;
            let d2 = Math.floor(Math.random() * 6) + 1;
            let distance = d1 + d2;
            G.die1 = d1;
           // return (JSON.stringify(G));
            G.cells[G.players[ctx.currentPlayer].position] = null;
            G.players[ctx.currentPlayer].position += distance;
            G.cells[G.players[ctx.currentPlayer].position] = id;

        },
        move: ({G, ctx}) => {
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
        check: ({G, ctx}) => {
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
        },

        rollcheck: (G, ctx) => {
            console.log(G.die1, G.die2);
        },


    }
}
