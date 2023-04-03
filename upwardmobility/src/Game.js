import { TurnOrder, Client, Server, Game } from "boardgame.io/core";
import react from 'react';
import { UpwardMobilityBoard } from "./Board";
import {eventsArray, itemsArray, buffsArray} from "./eventsfile";
export const UpwardsMobility = {

    // Turn phase flow
    // 1) Roll dice move piece
    // 2) Choose event or use item
    // 3a) If event, show event, if answer question correctly something good happens otherwise something bad happens
    // if correct answer than they pick up item and or gain currency then end turn
    // if incorrect answer than negativeness happens then end turn
    // 3b) If they choose the item, activate the item and do item thing and then show event

    // rollScreen
    // eventOrItemScreen
    // itemScreen
    // eventScreen
    // correctAnswerScreen
    // wrongAnswerScreen
    // endTurnScreen

    setup: () => ({
        players: {
            0: {
                position: 0,
                inventory: [
                    { name: "item 1", image: "", description: "item 1 description" },
                    { name: "item 2", image: "", description: "item 2 description" },
                    { name: "item 3", image: "", description: "item 3 description" }
                ],
                buffs: [],
                currency: 0,
            },
            1: {
                position: 0,
                inventory: [
                    { name: "item 4", image: "", description: "item 4 description" },
                    { name: "item 5", image: "", description: "item 5 description" },
                    { name: "item 6", image: "", description: "item 6 description" }
                ],
                buffs: [],
                currency: 0,
            },
            moveDist: 0,
        },

        currentEvent: null,

        board: {
            0: { currency: 0 },
            1: { currency: 2 },
            2: { currency: 2 },
            3: { currency: -1 },
            4: { currency: 3 },
            5: { currency: 5, },
            6: { currency: 1 },
            7: { currency: 0 },
            8: { currency: 0 },
            9: { currency: -2 },
            10: { currency: 0 },
            11: { currency: 0 },
            12: { currency: 2 },
            13: { currency: 2 },
            14: { currency: -1 },
            15: { currency: 3 },
            16: { currency: -2 },
            17: { currency: 1 },
            18: { currency: 2 },
            19: { currency: 0 },
            20: { currency: -2 },
            21: { currency: 2 },
            22: { currency: -2 },
            23: { currency: -2 },
            24: { currency: 0 },
            25: { currency: 0 },
        },


    }),
    turn: {
        order: TurnOrder.CONTINUE,
    },

    // Define the moves for rolling the dice and updating the game state.
    moves: {
        rollDice: ({G, ctx, events}) => {
            const die1 = Math.floor(Math.random() * 6) + 1;
            const die2 = Math.floor(Math.random() * 6) + 1;
            let moveDist = die1 + die2;
            G.moveDist = moveDist;
            G.players[ctx.currentPlayer].position += moveDist;

            let getId = "playerToken" + ctx.currentPlayer
            let currPlayToken = document.getElementById(getId)
            console.log(document.getElementById("playerToken" + ctx.currentPlayer).style.top)
            let calc = (parseInt(document.getElementById(getId).style.top.toString().substring(0,2)))
            let disCalc = calc - (calc * (.025 * moveDist))
            disCalc = disCalc + "%"
            document.getElementById(getId).style.top = disCalc



            // Check for players active buffs
            // G.players[ctx.currentPlayer].buffs.forEach((buff) => {
            //     if (buff.type === "moMoneyBuff") {
            //         moveDist += 1;
            //         buff.duration--;
            //         if (buff.duration === 0) {
            //             G.players[ctx.currentPlayer].buffs.splice(
            //                 G.players[ctx.currentPlayer].buffs.indexOf(buff),
            //                 1
            //             );
            //         }
            //     }
            // });

            G.players[ctx.currentPlayer].buffs.forEach((buff, index) => {
                switch (buff.name) {
                    case "Buff of Mo Money":
                        G.players[ctx.currentPlayer].currency += 2;
                        buff.duration--;

                        if (buff.duration === 0) {
                            G.players[ctx.currentPlayer].buffs.splice(index, 1);
                        }
                        break;
                }
            });

            G.currentEvent = eventsArray[Math.floor(Math.random() * eventsArray.length)];

            console.log("current event reward type: ", G.currentEvent.eventReward.type)

            if (G.currentEvent.eventReward.type === "item") {
                G.players[ctx.currentPlayer].inventory.push(G.currentEvent.eventReward.item.name);
            }
            if (G.currentEvent.eventReward.type === "buff") {
                G.players[ctx.currentPlayer].buffs.push(G.currentEvent.eventReward.buff);
            }

            events.setPhase("eventOrItemScreen");
        },

        addCurrency: ({G, ctx, events}, currency) => {
            G.players[ctx.currentPlayer].currency += currency;
        },

        loseCurrency: ({G, ctx, events}, currency) => {
            G.players[ctx.currentPlayer].currency -= currency;
        },

        moveForward: ({G, ctx, events}, moveDist) => {
            G.players[ctx.currentPlayer].position += moveDist;
        },

        moveBackward: ({G, ctx, events}, moveDist) => {
            G.players[ctx.currentPlayer].position -= moveDist;
        },

        // pickUpItem: ({G, ctx, events}, id) => {
        //     // const itemCell = G.board[G.players[ctx.currentPlayer].position];
        //     // const itemRef = itemCell.item;
        //
        //     G.players[ctx.currentPlayer].inventory.push(itemsArray[id]);
        //
        // },

        // use item function

        useItem: ({G, ctx, events}, item) => {

            console.log("use item function");

            switch (item) {
                case "Staff of MoMoney":
                    G.players[ctx.currentPlayer].currency += Math.random() * 5;
                    break;
            }

            const itemIndex = G.players[ctx.currentPlayer].inventory.indexOf(item);
            G.players[ctx.currentPlayer].inventory.splice(itemIndex, 1);

        },

        // apply buff function

        applyBuff: ({ G, ctx }, playerId, buffType, duration) => {
            G.players[ctx.currentPlayer].buffs.push({ type: buffType, duration: duration });
        },

    },
    phases: {
        rollScreen: {
            start: true
        },
        eventOrItemScreen: {

        },
        useItemScreen: {

        },
        eventScreen: {

        },
        correctAnswerScreen: {

        },
        wrongAnswerScreen: {

        },
        endTurnScreen: {

        },
        pickUpItemScreen: {

        }
    },
}