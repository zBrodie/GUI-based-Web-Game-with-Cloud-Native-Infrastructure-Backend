import { TurnOrder, Client, Server, Game } from "boardgame.io/core";
// import { getEvent} from "./eventsfile";
import react from 'react';
import { UpwardMobilityBoard } from "./Board";
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
        inventory: ['Staff of MoMoney', 'Staff of NoMoney', 'Orb of Steal Yo Buffs'],
          buffs: [],
          currency: 0,
      },
      1: {
        position: 0,
        inventory: ['Orb of MoMoney', 'Orb of NoMoney', 'Orb of Steal Yo Buffs'],
          buffs: [],
          currency: 0,
      },
        moveDist: 0,
    },
      currentEvent: null,

      board: {
        0: { event: 'start',    currency: 0 },
        1: { event: 'advance',  currency: 2 },
        2: { event: 'advance',  currency: 2 },
        3: { event: 'reverse',  currency: -1 },
        4: { event: 'advance',  currency: 3 },
        5: { event: 'wizardEvent',  currency: 5, item: 'Staff of MoMoney'},
        6: { event: 'advance',  currency: 1 },
        7: { event: 'none',     currency: 0 },
        8: { event: 'none',     currency: 0 },
        9: { event: 'reverse',  currency: -2 },
        10: { event: 'wizardEvent',    currency: 0 },
        11: { event: 'none',    currency: 0 },
        12: { event: 'advance', currency: 2 },
        13: { event: 'advance', currency: 2 },
        14: { event: 'reverse', currency: -1 },
        15: { event: 'wizardEvent', currency: 3 },
        16: { event: 'advance', currency: -2 },
        17: { event: 'advance', currency: 1 },
        18: { event: 'advance', currency: 2 },
        19: { event: 'none',    currency: 0 },
        20: { event: 'wizardEvent', currency: -2 },
        21: { event: 'advance', currency: 2 },
        22: { event: 'reverse', currency: -2 },
        23: { event: 'reverse', currency: -2 },
        24: { event: 'none', currency: 0 },
        25: { event: 'win', currency: 0 },
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
          // let moveDist = 5;
          G.moveDist = moveDist;
          G.players[ctx.currentPlayer].position += moveDist;

          // G.currentEvent = G.board[G.players[ctx.currentPlayer].position].event;
          // Check for players active buffs
          G.players[ctx.currentPlayer].buffs.forEach((buff) => {
              if (buff.type === "moMoneyBuff") {
                  moveDist += 1;
                  buff.duration--;
                  if (buff.duration === 0) {
                      G.players[ctx.currentPlayer].buffs.splice(
                          G.players[ctx.currentPlayer].buffs.indexOf(buff),
                          1
                      );
                  }
              }
          });

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

        pickUpItem: ({G, ctx, events}) => {
            const itemCell = G.board[G.players[ctx.currentPlayer].position];
            const itemRef = itemCell.item;

            G.players[ctx.currentPlayer].inventory.push(itemRef);

            events.setPhase("endTurnScreen");
        },

        useItem: ({G, ctx, events}, item) => {

          console.log("use item function");

          const itemIndex = G.players[ctx.currentPlayer].inventory.indexOf(item);
          G.players[ctx.currentPlayer].inventory.splice(itemIndex, 1);

        },

        applyBuff: ({ G, ctx }, playerId, buffType, duration) => {
            G.players[playerId].buffs.push({ type: buffType, duration: duration });
        },

        moveNoEvent: ({ G, ctx }) => {
          let moveDist = 5;
          G.players[ctx.currentPlayer].position += moveDist;

        },

        setCurrentEvent: ({G, ctx}, currentEvent) => {
            G.currentEvent = currentEvent;
        },

    },
    phases: {
        rollScreen: {
            start: true
        },
        eventOrItemScreen: {

        },
        itemScreen: {

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