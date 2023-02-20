import React from 'react';
import { Client } from 'boardgame.io/react';
import upwardsmobility from './Game.js';

const RollButton = ({ G, ctx, moves,props }) => {
    const isCurrentPlayer = ctx.currentPlayer == ctx.playerID;
    const isActivePlayer = ctx.activePlayers && ctx.activePlayers[ctx.currentPlayer]
    const isDisabled = !isCurrentPlayer || !isActivePlayer
    return (

             <div>
                 <button disabled={isDisabled} onClick={() => moves.roll()}> Roll Dice </button>,
                 <div>
                     You rolled {G.die1} + {G.die2} = {G.die1 + G.die2}
                     <button onClick={() => moves.move()}>Confirm</button>
                </div>
                 )}
             </div>
    );
}
 rollbutton()

export default RollButton;
