import React from 'react'
import dice from './GameDieBigpng.png'
import playerList from './PlayerListBackground.png'
import gamelogo from './Upward_Mobility_big.png'
import {disMoveDist} from "./Game";

export function UpwardMobilityBoard({ctx, G, moves}){

   const rollDice = (id) =>{
       moves.tempRoll(id)
       console.log(ctx.currentPlayer.moveDist)
   }

    return(
        <div className="GamePage">
            <div className="Rectangle_42" id = "eventScreen">
                <button onClick = {() => rollDice(0)}  className="DiceButton" id="DiceButton"></button>
                <img  onClick = {() => rollDice(0)} className="DiceImage" id="NoPath_-_Copy_8" src="NoPath_-_Copy_8.png" srcSet="NoPath_-_Copy_8.png 1x, NoPath_-_Copy_8@2x.png 2x"/>
                <div id="A_pair_of_strange_dice_lay_bef">
                    A pair of strange dice lay before you...
                </div>
            </div>

            <svg className="GameProgression">
                <rect id="GameProgressionMenu" rx="0" ry="0" x="0" y="0">
                </rect>
            </svg>

            <div className="Inventory">
                <rect id="Inventory" rx="0" ry="0" x="0" y="0">
                </rect>
            </div>

            <div className="ChatAndLogo">
                <rect id="ChatAndLogo" rx="0" ry="0" x="0" y="0"></rect>
                <div id="chatSection"></div>
            </div>

            <img id="ProgresionImage" src="src/Templates/assets/StartFinishScale.png" srcSet="NoPath_-_Copy_6.png 1x, NoPath_-_Copy_6@2x.png 2x"/>


            {/*Player List*/}
            <svg className="GamePlayerBackground">
                <rect id="GamePlayerBackground" rx="0" ry="0" x="0" y="0" width="996" height="146">
                </rect>
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
            <svg className="InventoryLabel">
                <rect id="InventoryLabel" rx="0" ry="0" x="0" y="0">
                </rect>
            </svg>

            <div id="Inventory_Label_Word">
                <span>Inventory</span><br/>
            </div>
            {/*Inventory List*/}


            {/*Chat List*/}
            <input className="chatBox" type="text" placeholder="Type here to chat" id="chatBox" rx="7" ry="7" x="0" y="0" width="290" height="33"/>

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