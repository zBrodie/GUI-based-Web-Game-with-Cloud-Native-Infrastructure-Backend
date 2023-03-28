import React from 'react'
import dice from './GameDieBigpng.png'
import playerList from './PlayerListBackground.png'
import gamelogo from './Upward_Mobility_big.png'
import { moveDist } from "./Game";


function showRollScreen() {
    console.log("showRollScreen function");
    // Show the dice and roll button
    document.getElementById("A_pair_of_strange_dice_lay_bef").style.visibility = "visible";
    document.getElementById("A_pair_of_strange_dice_lay_bef").removeAttribute("disabled");

    document.getElementById("DiceButton").style.visibility = "visible";
    document.getElementById("DiceButton").removeAttribute("disabled");

    // Hide the roll result and event buttons
    document.getElementById("temp").style.display = "none";
}

export function UpwardMobilityBoard({ctx, G, moves, events}){
    function endTurnAndSetPhase() {
        events.setPhase("rollScreen");
        events.endTurn();
    }

    const { moveDist } = G;

    console.log("This is moveDist: " + moveDist)

    let eventScreenContents = "";

    console.log(ctx.phase)

    // <button onClick = {() => events.setPhase("eventOrItemScreen")}  className="DiceButton" id="DiceButton"></button>


    // if (ctx.phase === "rollScreen") {
    //     eventScreenContents = (
    //         <div>
    //             <button onClick = {() => moves.rollDice()}  className="DiceButton" id="DiceButton"></button>
    //             <img  onClick = {() => moves.rollDice()} className="DiceImage" id="NoPath_-_Copy_8" src="NoPath_-_Copy_8.png" srcSet="NoPath_-_Copy_8.png 1x, NoPath_-_Copy_8@2x.png 2x"/>
    //             <div id="A_pair_of_strange_dice_lay_bef">
    //                 A pair of strange dice lay before you...
    //             </div>
    //         </div>
    //     )
    // }
    //
    // if (ctx.phase === "eventOrItemScreen") {
    //     eventScreenContents = (
    //         <button onClick = {() => moves.moveNoEvent()} className="DiceButton" id="GameMoveWithoutEvent">Move</button>
    //     )
    // }

    switch (ctx.phase) {
        case "rollScreen":
            eventScreenContents = (
                <div>
                    <button onClick = {() => moves.rollDice()}  className="DiceButton" id="DiceButton"></button>
                    <img  onClick = {() => moves.rollDice()} className="DiceImage" id="NoPath_-_Copy_8" src="NoPath_-_Copy_8.png" srcSet="NoPath_-_Copy_8.png 1x, NoPath_-_Copy_8@2x.png 2x"/>
                    <div id="A_pair_of_strange_dice_lay_bef">
                        A pair of strange dice lay before you...
                    </div>
                </div>
            )
            break;
        case "eventOrItemScreen":
            eventScreenContents = (
                <div>
                    <span id="rollVal" className="inGameText"> Player {ctx.currentPlayer + 1} moves {moveDist} landing on cell {G.players[ctx.currentPlayer].position}</span>
                    <button onClick={() => events.setPhase("eventScreen")} className="inGameButton" id="showEventButton">Show Event</button>
                    <button onClick={() => events.setPhase("useItemScreen")} className="inGameButton" id="use-item-button">Use Item</button>
                </div>
        )
            break;
        case "eventScreen":
            eventScreenContents = (
                <div>
                    <div>
                        <span className="inGameText">A mysterious raggedy wizard appears before you and asks the question... "What is the airspeed velocity of an unladen swallow?"</span>
                    </div>
                    <div className="event-button-container">
                        <button onClick={() => events.setPhase("correctAnswerScreen")} className="answerButton">What do you mean? African or European swallow?</button>
                        <button onClick={() => events.setPhase("wrongAnswerScreen")} className="answerButton">I don't know that!</button>
                        <button onClick={() => events.setPhase("wrongAnswerScreen")} className="answerButton">What is an unladen swallow?</button>
                    </div>
                </div>
            )
            break;
        case "useItemScreen":
            eventScreenContents = (
                <div>
                    use item screen
                </div>
            )
            break;
        case "correctAnswerScreen":
            eventScreenContents = (
                <div>
                    <span className="inGameText">The wizard is dumbfound and spontaneously combusts into 2 coins which are added to your wallet! He also drops his "Staff of MoMoney"
                    </span>
                    <div className="event-button-container">
                        <button onClick={() => moves.pickUpItem()} className="answerButton">Pick Up Item</button>
                    </div>
                </div>
            )
            break;

        case "pickUpItemScreen":
            eventScreenContents = (
                <div>
                    <span className="inGameText">You have picked up the wizards staff which </span>
                    <div className="event-button-container">
                        <button onClick={() => endTurnAndSetPhase()} className="answerButton">End Turn</button>
                    </div>

                </div>
            )
            break;

        case "wrongAnswerScreen":
            eventScreenContents = (
                <div>
                    <span className="inGameText">The wizard slaps you and you move back 3 spaces</span>
                    <div className="event-button-container">
                        <button onClick={() => endTurnAndSetPhase()} className="answerButton">End Turn</button>
                    </div>

                </div>
            )
            break;



    }

    return(
        <div className="GamePage">
            <div className="Rectangle_42" id = "eventScreen">
                {/*<button onClick = {() => moves.tempRoll()}  className="DiceButton" id="DiceButton"></button>*/}
                {eventScreenContents}
                {/*<img  onClick = {() => moves.tempRoll()} className="DiceImage" id="NoPath_-_Copy_8" src="NoPath_-_Copy_8.png" srcSet="NoPath_-_Copy_8.png 1x, NoPath_-_Copy_8@2x.png 2x"/>*/}
                {/*<div id="A_pair_of_strange_dice_lay_bef">*/}
                {/*    A pair of strange dice lay before you...*/}
                {/*</div>*/}

                {/*<button onClick={() => endTurn()}  id="GameEndTurn" >End Turn</button>*/}
                {/*<button onClick={() => pickUpItem()}  id="GamePickUpItem" >Pick Up Item</button>*/}
                {/*/!*<button onClick={() => moveWithoutEvent()}>move no event button</button>*!/*/}

            </div>

            <svg className="GameProgression">
                <rect id="GameProgressionMenu" rx="0" ry="0" x="0" y="0">
                </rect>
            </svg>

            <img id="ProgresionImage" src="src/Templates/assets/StartFinishScale.png" srcSet="NoPath_-_Copy_6.png 1x, NoPath_-_Copy_6@2x.png 2x"/>


            {/*Player List*/}
            <svg className="GamePlayerBackground">
            </svg>
            <img id="NoPath_-_Copy_10" src="NoPath_-_Copy_10.png" srcSet="NoPath_-_Copy_10.png 1x, NoPath_-_Copy_10@2x.png 2x"/>

            <svg className="GamePlayer_1">
                <ellipse id="GamePlayer_1" rx="53" ry="53" cx="53" cy="53">
                </ellipse>
            </svg>
            <svg className="GamePlayer_2">
                <ellipse id="GamePlayer_2" rx="53" ry="53" cx="53" cy="53">
                </ellipse>
            </svg>
            <svg className="GamePlayer_3">
                <ellipse id="GamePlayer_3" rx="53" ry="53" cx="53" cy="53">
                </ellipse>
            </svg>
            <svg className="GamePlayer_4">
                <ellipse id="GamePlayer_4" rx="53" ry="53" cx="53" cy="53">
                </ellipse>
            </svg>
            <svg className="GamePlayer_5">
                <ellipse id="GamePlayer_5" rx="53" ry="53" cx="53" cy="53">
                </ellipse>
            </svg>
            <svg className="GamePlayer_6">
                <ellipse id="GamePlayer_6" rx="53" ry="53" cx="53" cy="53">
                </ellipse>
            </svg>
            {/*Player List*/}


            {/*Inventory List*/}
            <div className="Inventory">
                <rect id="Inventory" rx="0" ry="0" x="0" y="0">
                </rect>
            </div>
            <svg className="InventoryLabel">
                <rect id="InventoryLabel" rx="0" ry="0" x="0" y="0">
                </rect>
            </svg>

            <div id="Inventory_Label_Word">
                Inventory
            </div>
            {/*Inventory List*/}


            {/*Chat List*/}
            <div className="ChatAndLogo">
                <rect id="ChatAndLogo" rx="0" ry="0" x="0" y="0"></rect>
                <div id="chatSection"></div>
            </div>
            <input className="chatBox" type="text" placeholder="Type here to chat" id="chatBox" rx="7" ry="7" x="0" y="0" />

            <div id="Type_here_to_chat">
                <span>Type here to chat...</span>
            </div>
            {/*Chat List*/}


            {/*Player Stat List*/}
            <svg className="PlayerStatsBackground">
                <rect id="PlayerStatsBackground" rx="0" ry="0" x="0" y="0">
                </rect>

            </svg>
            <div className="PlayerName" id="PlayerName">
                TempName
            </div>
            <div className="PlayerJobTitle" id="PlayerJobTitle">
                TempJobTitle
            </div>
            <img className="PlayerBuffsIcon" id="PlayerBuffsIcon" src="BuffIcon.png" srcSet="BuffIcon.png 1x, BuffIcon.png.png 2x"/>
            <img className="PlayerDebuffsIcon" id="PlayerDebuffsIcon" src="DebuffIcon.png" srcSet="DebuffIcon.png 1x, DebuffIcon.png.png 2x"/>
            <div className="PlayerCurrency" id="PlayerCurrency">
                $12345
            </div>
            <div className="PlayerIncome" id="PlayerIncome">
                +$2000 in 2 turns
            </div>
            {/*Player Stat List*/}
        </div>


    )
}