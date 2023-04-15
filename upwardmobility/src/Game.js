import { TurnOrder } from "boardgame.io/core";
import montyPythonImage from "./monypython.png";
import React from 'react';
import { UpwardMobilityBoard } from "./Board";
import { eventsArray, itemsArray, buffsArray } from "./eventsfile";



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
                    // { name: "Staff of MoMoney", image: montyPythonImage, description: "item 1 description", onUse: "You randomly generate between 0 and 10 coins" },
                    // { name: "Staff of NoMoney", image: montyPythonImage, description: "item 2 description", onUse: "You randomly lose between 0 and 10 coins" },
                    // { name: "Orb of MoMoney", image: montyPythonImage, description: "item 3 description", onUse: "You gain the buff of MoMoney for 3 turns." }
                ],
                buffs: [],
                currency: 0,
                jobTitle: "Starting job title",
                jobTitleDescription: "Starting job description",
                selectedOption: -1,

            },
            1: {
                position: 0,
                inventory: [
                //     { name: "Staff of MoMoney", image: montyPythonImage, description: "item 1 description", onUse: "You randomly generate between 0 and 10 coins" },
                //     { name: "Staff of NoMoney", image: montyPythonImage, description: "item 2 description", onUse: "You randomly lose between 0 and 10 coins" },
                //     { name: "Orb of MoMoney", image: montyPythonImage, description: "item 3 description", onUse: "You gain the buff of MoMoney for 3 turns." }
                ],
                buffs: [],
                currency: 0,
                jobTitle: "Starting job title",
                jobTitleDescription: "Starting job title description",
                selectedOption: -1,

            },
            moveDist: 0,
        },

        jobTitles: [
            {name: "job title 1", description: "description for job title 1", previouslyHeldBy: []},
            {name: "job title 2", description: "description for job title 2", previouslyHeldBy: []},
            {name: "job title 3", description: "description for job title 3", previouslyHeldBy: []},
            {name: "job title 4", description: "description for job title 4", previouslyHeldBy: []},
    ],

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
            // console.log(document.getElementById("playerToken" + ctx.currentPlayer).style.top)
            let calc = (parseInt(document.getElementById(getId).style.top.toString().substring(0,2)))
            let disCalc = calc - (calc * (.025 * moveDist))
            disCalc = disCalc + "%"
            document.getElementById(getId).style.top = disCalc

            console.log("Player position: " + G.players[ctx.currentPlayer].position)

            const player = G.players[ctx.currentPlayer];
            if (player.position >= 10 && player.position <= 20) {
                console.log("Inside of job title check 10 - 20. Player position: " + player.position)
                // Choose a random job title from the list that the player has not held before
                let availableJobTitles = G.jobTitles.filter((jobTitle) => !jobTitle.previouslyHeldBy.includes(ctx.currentPlayer));
                if (availableJobTitles.length === 0) {
                    availableJobTitles = G.jobTitles;
                }
                const jobTitleIndex = Math.floor(Math.random() * availableJobTitles.length);
                const jobTitle = availableJobTitles[jobTitleIndex];
                player.jobTitle = jobTitle.name;
                player.jobTitleDescription = jobTitle.description;
                jobTitle.previouslyHeldBy.push(ctx.currentPlayer);
            }
            if (player.position >= 20 && player.position <= 30) {
                console.log("Inside of job title check 20 - 30. Player position: " + player.position)
                let availableJobTitles = G.jobTitles.filter((jobTitle) => !jobTitle.previouslyHeldBy.includes(ctx.currentPlayer));
                if (availableJobTitles.length === 0) {
                    availableJobTitles = G.jobTitles;
                }
                const jobTitleIndex = Math.floor(Math.random() * availableJobTitles.length);
                const jobTitle = availableJobTitles[jobTitleIndex];
                player.jobTitle = jobTitle.name;
                player.jobTitleDescription = jobTitle.description;
                jobTitle.previouslyHeldBy.push(ctx.currentPlayer);
            }
            if (player.position >= 30 && player.position <= 40) {
                console.log("Inside of job title check 30 - 40. Player position: " + player.position)
                let availableJobTitles = G.jobTitles.filter((jobTitle) => !jobTitle.previouslyHeldBy.includes(ctx.currentPlayer));
                if (availableJobTitles.length === 0) {
                    availableJobTitles = G.jobTitles;
                }
                const jobTitleIndex = Math.floor(Math.random() * availableJobTitles.length);
                const jobTitle = availableJobTitles[jobTitleIndex];
                player.jobTitle = jobTitle.name;
                player.jobTitleDescription = jobTitle.description;
                jobTitle.previouslyHeldBy.push(ctx.currentPlayer);
            }
            if (player.position >= 40 && player.position <= 50) {
                console.log("Inside of job title check 40 - 50. Player position: " + player.position)
                let availableJobTitles = G.jobTitles.filter((jobTitle) => !jobTitle.previouslyHeldBy.includes(ctx.currentPlayer));
                if (availableJobTitles.length === 0) {
                    availableJobTitles = G.jobTitles;
                }
                const jobTitleIndex = Math.floor(Math.random() * availableJobTitles.length);
                const jobTitle = availableJobTitles[jobTitleIndex];
                player.jobTitle = jobTitle.name;
                player.jobTitleDescription = jobTitle.description;
                jobTitle.previouslyHeldBy.push(ctx.currentPlayer);
            }

            console.log("Current player job title : " + G.players[ctx.currentPlayer].jobTitle)

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
            // G.currentEvent = eventsArray[Math.floor(Math.random() * 2)];

            // console.log("current event reward type: ", G.currentEvent.eventReward.type)

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

        // updated event response


        selectAnswer({G, ctx}, answerIndex) {
            G.players[ctx.currentPlayer].selectedOption = answerIndex;
        },

        pickUpItem: ({G, ctx}, obj) => {

            console.log("Inside of pickUpItem function. Object: " + obj.type)

            if (obj.type === "item") {
                G.players[ctx.currentPlayer].inventory.push(obj.item);
            }
            if (obj.type === "buff") {
                G.players[ctx.currentPlayer].buffs.push(obj.buff);
            }

        },

        eventResponse: ({G, ctx}, eventEffect) => {

            // console.log("Inside of eventResponse function. Effect: " + eventEffect)

            switch (eventEffect) {
                case "effectResponse1":
                    G.players[ctx.currentPlayer].currency += 3;
                    console.log("Inside of move switch case for response 1")
                    break;
                case "effectResponse2":
                    G.players[ctx.currentPlayer].currency += 4;
                    const tempPosition = G.players[ctx.currentPlayer].position;

                    console.log("Inside of move switch case for response 2")
                    break;
                case "effectResponse3":
                    G.players[ctx.currentPlayer].currency += 5;
                    console.log("Inside of move switch case for response 3")
                    break;
            }
        },

        // use item function

        useItem: ({G, ctx, events}, item) => {

            console.log("use item function");

            switch (item) {
                case "Staff of MoMoney":
                    G.players[ctx.currentPlayer].currency += Math.random() * 5;
                    break;
                case "Staff of NoMoney":
                    G.players[ctx.currentPlayer].currency -= Math.random() * 5;
                    break;
                case "Orb of MoMoney":
                    G.players[ctx.currentPlayer].buffs.push({name: "Buff of Mo Money", duration: 3});
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

        },
        itemEffectResultScreen: {

        },
        useItemOnPlayerScreen: {

        },
        winningGameScreen: {

        },
        eventResponseScreen: {

        },
        eventResponseScreen2: {

        }
    },
}

// module.exports = { UpwardsMobility };
