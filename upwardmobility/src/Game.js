import { TurnOrder } from "boardgame.io/core";
import montyPythonImage from "./monypython.png";
import React from 'react';
import { UpwardMobilityBoard } from "./Board";
import { eventsArray } from "./eventsfile";
import { itemsArray } from "./itemsFile";
import buriedTreasure from "./buriedtreasure.avif";
import { starterJobTitles } from "./jobTitles";

export const UpwardsMobility = {

    setup: () => ({

        players: {
            0: {
                position: 0,
                inventory: [
                ],
                buffs: [],
                currency: 50,
                jobTitle: "Scrap Metal Salvager",
                jobTitleDescription: "Starting job description",
                selectedOption: -1,

            },
            1: {
                position: 0,
                inventory: [
                ],
                buffs: [],
                currency: 0,
                jobTitle: "Cyber Beggar",
                jobTitleDescription: "Starting job title description",
                selectedOption: -1,

            },
            moveDist: 0,
        },

        currentEvent: null,
        lastEvent: null,

    }),
    turn: {
        order: TurnOrder.CONTINUE,
    },

    // Define the moves for rolling the dice and updating the game state.
    moves: {
        rollDice: ({G, ctx, events}) => {

            let starterJobTitles = [
                {name: "Retail Employee", description: "You Work retail at your local grociery store", previouslyHeldBy: []},
                {name: "Scrap Metal Salvager", description: "You collect and sell scrap metal from abandoned buildings, broken machines, and old vehicles.", previouslyHeldBy: []},
                {name: "Plasma Dumpster Diver", description: "You search through virtual and physical dumpsters to find discarded or lost items to sell.", previouslyHeldBy: []},
                {name: "Hologram Waiter - You serve food and drinks to the wealthy in virtual and physical restaurants, earning very little in tips.", description: "You Work retail at your local grociery store", previouslyHeldBy: []},
                {name: "Robot Mechanic", description: " You repair and maintain Robots and vehicles for little pay, often working long hours in unsafe conditions.", previouslyHeldBy: []},
                {name: "Hologram Hair Stylist", description: "You specialize in creating and maintaining holographic hairstyles for your clients.", previouslyHeldBy: []},
                {name: "School Janitor", description: "You are the janitor at a school designed only for robots", previouslyHeldBy: []},
                {name: "Cyber Beggar", description: "You Work retail at your local grociery store", previouslyHeldBy: []},
                {name: "Robot Customer Service", description: "You work customer service at a super store dealing with various angry people wanting to return stolen items", previouslyHeldBy: []},
            ]
            let jobTitlesLevel2 =  [
                {name: "AI Dating Consultant", description: "You help people find love by creating custom AI algorithms that match them with compatible partners.", previouslyHeldBy: []},
                {name: "Cyber Security Clown", description: "You entertain and educate people about cyber security by dressing up as a clown and performing funny skits.", previouslyHeldBy: []},
                {name: "Virtual Reality Game Tester", description: "You test and provide feedback on virtual reality games and simulations, often testing the limits of these immersive experiences.", previouslyHeldBy: []},
                {name: "Black Market Dealer", description: "You sell illegal or restricted goods on the black market, such as drugs, weapons, or forbidden technologies.", previouslyHeldBy: []},
                {name: "Cyberpunk DJ", description: "You perform music in clubs and other venues that cater to the cyberpunk subculture.", previouslyHeldBy: []},
                {name: "Urban Gardener", description: "You cultivate plants in urban environments, often using hydroponic or aeroponic systems to grow crops in small spaces.", previouslyHeldBy: []},
                {name: "Black Market Dealer", description: "You sell illegal or restricted goods on the black market, such as drugs, weapons, or forbidden technologies.", previouslyHeldBy: []},
                {name: "Personal Transport Driver", description: "You drive customized vehicles that provide specialized transportation for individuals, such as flying cars or high-speed motorcycles.", previouslyHeldBy: []},
                {name: "Street Artist", description: "You use graffiti and other street art to express political or social commentary in public spaces.", previouslyHeldBy: []},
            ]
            let jobTitlesLevel3 = [
                {name: "Nanochemist", description: "You help people find love by creating custom AI algorithms that match them with compatible partners.", previouslyHeldBy: []},
                {name: "Security Officer", description: "You provide security and protection for corporate buildings, executives, and assets, often utilizing advanced weaponry and cybernetic enhancements.", previouslyHeldBy: []},
                {name: "Virtual Assistant", description: "You provide administrative and personal assistance to individuals through virtual reality communication.", previouslyHeldBy: []},
                {name: "Cyberspace Architect", description: "You design and create advanced digital environments and networks, such as virtual marketplaces or social networks.", previouslyHeldBy: []},
                {name: "Robotics Developer", description: "You develop and program advanced robots and automated systems for various industries, such as manufacturing or transportation.", previouslyHeldBy: []},
                {name: "Cybernetic Law Enforcement Officer", description: "You enforce the law in a world where cybernetic enhancements and advanced technologies blur the line between human and machine.", previouslyHeldBy: []},
                {name: "Biomech Technician", description: "You install and maintain biomechanical implants that enhance physical abilities, such as strength or speed.", previouslyHeldBy: []},
                {name: "Virtual Reality Experience Designer", description: "You create immersive virtual reality experiences for various industries, such as gaming, education, or advertising.", previouslyHeldBy: []},
                {name: "Sustainable Architecture Designer", description: "You design and create sustainable buildings and infrastructure that utilize advanced energy and material technologies.", previouslyHeldBy: []},
            ]
            let jobTitlesLevel4 = [
                {name: "Cyberdoc", description: "You perform medical procedures that involve cybernetic implants, such as installation or removal of implants.", previouslyHeldBy: []},
                {name: "Artificial Intelligence Ethics Advisor", description: "You provide guidance and advice to corporations and governments on the ethical and societal implications of developing and using advanced artificial intelligence systems.", previouslyHeldBy: []},
                {name: "Fusion Reactor Physicist", description: "You research and develop new ways to harness the power of nuclear fusion to create a virtually unlimited energy source, requiring a deep understanding of plasma physics and nuclear reactions.", previouslyHeldBy: []},
                {name: "Spacecraft Engineer", description: "You design and create advanced spacecraft and starships, incorporating the latest technology and materials to ensure safe and efficient travel.", previouslyHeldBy: []},
                {name: "Artificial Intelligence Strategist", description: "You develop and implement strategies for corporations and governments on how to leverage artificial intelligence systems for business or military advantage.", previouslyHeldBy: []},
                {name: "Neural Interface Developer", description: "You design and create advanced neural interfaces that can directly connect a human brain to computers or other cybernetic systems, enabling unprecedented levels of control and information access.", previouslyHeldBy: []},
                {name: "Biomedical Engineer", description: "You design and create advanced medical technologies, such as cybernetic organs or advanced prosthetics, to enhance or replace human body parts.", previouslyHeldBy: []},
                {name: "Nanochemist", description: "You create and manipulate microscopic particles and molecules to create advanced materials and substances, such as self-healing materials or advanced fuels.", previouslyHeldBy: []},
                {name: "Advanced Nanotechnology Scientist", description: "You research and develop advanced nanotechnologies that can enable new capabilities and applications, such as nanorobotics or nanosensors.", previouslyHeldBy: []},
            ]

            const die1 = Math.floor(Math.random() * 6) + 1;
            const die2 = Math.floor(Math.random() * 6) + 1;
            let moveDist = die1 + die2;
            G.moveDist = moveDist;
            G.players[ctx.currentPlayer].position += moveDist;

            let getId = "playerToken" + ctx.currentPlayer
            console.log(getId)
            let currPlayToken = document.getElementById(getId)
            console.log(currPlayToken)
            console.log(document.getElementById(getId).style)
            let calc = (parseInt(document.getElementById(getId).style.top.toString().substring(0,2)))
            let disCalc = calc - (calc * (.025 * moveDist))
            disCalc = disCalc + "%"
            document.getElementById(getId).style.top = disCalc

            console.log("Player position: " + G.players[ctx.currentPlayer].position)

            const player = G.players[ctx.currentPlayer];
            if (player.position >= 10 && player.position <= 20) {
                console.log("Inside of job title check 10 - 20. Player position: " + player.position)
                G.players[ctx.currentPlayer].jobTitle = jobTitlesLevel2[Math.floor(Math.random() * jobTitlesLevel2.length)].name;
            }
            if (player.position >= 20 && player.position <= 30) {
                console.log("Inside of job title check 20 - 30. Player position: " + player.position)
                G.players[ctx.currentPlayer].jobTitle = jobTitlesLevel2[Math.floor(Math.random() * jobTitlesLevel3.length)].name
            }
            if (player.position >= 30 && player.position <= 40) {
                console.log("Inside of job title check 30 - 40. Player position: " + player.position)
                G.players[ctx.currentPlayer].jobTitle = jobTitlesLevel2[Math.floor(Math.random() * jobTitlesLevel4.length)].name
            }
            if (player.position >= 40 && player.position <= 50) {
                G.players[ctx.currentPlayer].jobTitle = "Regional Overlord"
            }

            console.log("Current player job title : " + G.players[ctx.currentPlayer].jobTitle)

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

            let newEvent;
            do {
                const randomEventIndex = Math.floor(Math.random() * eventsArray.length);
                newEvent = eventsArray[randomEventIndex];
            } while (newEvent === G.lastEvent);

            G.currentEvent = newEvent;
            // G.currentEvent = eventsArray[7]
            // G.lastEvent = G.currentEvent;
            events.setPhase("eventOrItemScreen");
        },

        addCurrency: ({G, ctx, events}, currency) => {
            G.players[ctx.currentPlayer].currency += currency;
        },

        subtractCurrency: ({G, ctx, events}, currency) => {
            console.log("Before subtraction:", G.players[ctx.currentPlayer].currency);
            currency = Math.abs(currency);
            if (G.players[ctx.currentPlayer].currency < currency) {
                G.players[ctx.currentPlayer].currency = 0;
            } else {
                G.players[ctx.currentPlayer].currency -= currency;
            }

            console.log("After subtraction:", G.players[ctx.currentPlayer].currency);


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

            console.log(obj)

            if (obj.type === "item") {
                G.players[ctx.currentPlayer].inventory.push(obj.item);
            }
            if (obj.type === "buff") {
                G.players[ctx.currentPlayer].buffs.push(obj.buff);
            }
            if (obj.type === "nothing") {
                console.log("Nothing happened")
            }
            if (obj.type === "both") {
                console.log("both item and buff will be pushed here")
            }
        },

        pickUpItemFromStore: ({G, ctx}, obj) => {
            G.players[ctx.currentPlayer].inventory.push(obj);
        },

        eventResponse: ({G, ctx, events}, eventEffect) => {

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
                case "insufficientFundsEffect":
                    console.log("Inside of insufficient funds switch case")
                    break;
                case "nightMarketStore":
                    events.setPhase("nightMarketScreen");
                    console.log("Inside of night market store switch case")
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
                    G.players[ctx.currentPlayer].buffs.push({ name: "Buff of Mo Money", image: buriedTreasure, description: "Description of buff", duration: 5 });
                    break;
            }


            const itemIndex = G.players[ctx.currentPlayer].inventory.indexOf(item);
            G.players[ctx.currentPlayer].inventory.splice(itemIndex, 1);

        },

        // apply buff function

        applyBuff: ({ G, ctx }, buff) => {
            G.players[ctx.currentPlayer].buffs.push(buff);
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

        },
        insufficientFundsScreen: {

        },
        visitShopScreen: {

        },
        successfulPurchaseScreen: {

        },
        unsuccessfulPurchaseScreen: {

        },
        proceedToEventScreen: {

        },
        nightMarketScreen: {

        }
    },
}