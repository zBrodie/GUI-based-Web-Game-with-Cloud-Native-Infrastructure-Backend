import React from 'react'
import dice from './GameDieBigpng.png'
import playerList from './PlayerListBackground.png'
import gamelogo from './Upward_Mobility_big.png'
import {disMoveDist} from "./Game";
import {useContext, useRef, useState} from "react";
import {useEffect} from "react";

const numPlayers = 2;

function loadPlayerProgTokens(){

    document.getElementById("playerTokensDiv").innerHTML = " "

    for(let i = 1; i<=numPlayers; i++){

        let playerToken = document.createElement("div")
        playerToken.setAttribute("class", "GameProgressionToken")

        if(i == 1){
            playerToken.style.backgroundColor = "rgba(234,0,217,1)"
            let currId = "player" + i + "Token"
            playerToken.setAttribute("id", currId)
        }
        if(i == 2){
            playerToken.style.backgroundColor = "rgba(115,248,255,1)"
            let currId = "player" + i + "Token"
            playerToken.setAttribute("id", currId)
        }
        if(i == 3){
            playerToken.style.backgroundColor = "rgba(0,201,60,1)"
            let currId = "player" + i + "Token"
            playerToken.setAttribute("id", currId)
        }
        if(i == 4){
            playerToken.style.backgroundColor = "rgba(196,0,0,1)"
            let currId = "player" + i + "Token"
            playerToken.setAttribute("id", currId)
        }
        if(i == 5){
            playerToken.style.backgroundColor = "rgba(105,0,225,1)"
            let currId = "player" + i + "Token"
            playerToken.setAttribute("id", currId)
        }
        if(i == 6){
            playerToken.style.backgroundColor = "rgba(0,61,204,1)"
            let currId = "player" + i + "Token"
            playerToken.setAttribute("id", currId)
        }
        document.getElementById("playerTokensDiv").append(playerToken)
    }


}


function showRollScreen() {
    console.log("showRollScreen function");
    // Show the dice and roll button
    document.getElementById("A_pair_of_strange_dice_lay_bef").style.visibility = "visible";
    document.getElementById("A_pair_of_strange_dice_lay_bef").removeAttribute("disabled");

    document.getElementById("DiceButton").style.visibility = "visible";
    document.getElementById("DiceButton").removeAttribute("disabled");

    document.getElementById("NoPath_-_Copy_8").style.visibility = "visible";
    document.getElementById("NoPath_-_Copy_8").removeAttribute("disabled");

    document.getElementById("GameEndTurn").style.visibility="hidden";
    document.getElementById("GameEndTurn").removeAttribute("disabled");

    // Hide the roll result and event buttons
    document.getElementById("temp").style.display = "none";
}

export function UpwardMobilityBoard({ctx, G, moves}){

    const rollDice = () =>{
       moves.tempRoll();
   }

   const endTurn = () =>{
       moves.endTurn();
       showRollScreen();
   }

   useEffect(() =>{
       console.log("useEffect Ran")
       loadPlayerProgTokens()
   }, [])


    return(
        <div className="GamePage">
            <div className="Rectangle_42" id = "eventScreen">
                <button onClick = {() => rollDice()}  className="DiceButton" id="DiceButton"></button>
                <img  onClick = {() => rollDice()} className="DiceImage" id="NoPath_-_Copy_8" src="NoPath_-_Copy_8.png" srcSet="NoPath_-_Copy_8.png 1x, NoPath_-_Copy_8@2x.png 2x"/>
                <div id="A_pair_of_strange_dice_lay_bef">
                    A pair of strange dice lay before you...
                </div>

                <button onClick={() => endTurn()}  id="GameEndTurn" >End Turn</button>

            </div>

            <svg className="GameProgression">
                <rect id="GameProgressionMenu" rx="0" ry="0" x="0" y="0">
                </rect>
            </svg>

            <div id="progressionDiv"  class = "ProgressionDiv">
                <img id="ProgresionImage" src="src/Templates/assets/StartFinishScale.png" srcSet="NoPath_-_Copy_6.png 1x, NoPath_-_Copy_6@2x.png 2x"/>
                <div id = "playerTokensDiv">

                </div>
            </div>



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