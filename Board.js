import React from 'react';

export function upwardsMobilityBoard({ ctx, G, moves }) {

    const playerPos = {

    }
    const onClick = (id) => moves.clickCell(id);

    let winner = '';
    if (ctx.gameover) {
        winner =
            ctx.gameover.winner !== undefined ? (
                <div id="winner">Winner: {ctx.gameover.winner}</div>
            ) : (
                <div id="winner">Draw!</div>
            );
    }

    const n = 6;
    const matrixArray = [];

    const goodCell = {
        3: 11,
        5: 23,
        7:15,
        21:33,
        26:31
    }

    const badCell = {
        13: 6,
        9: 4,
        19: 2,
        34: 22,
        29: 16
    }
    const LADDER_CLASS = "ladder";
    const SNAKE_CLASS = "snake";

    function createMatrix(){
        let block = (n * n) + 1;
        for(let column=1;column<=n;column++){
            let rows = [];
            if (column % 2 === 0){
                block = block - n;
                let value = block;
                for(let row=1;row<=n;row++){
                    rows.push(value);
                    value++
                }
            }else{
                for(let row=1;row<=n;row++){
                    block = block - 1;
                    rows.push(block);
                }
            }
            matrixArray.push(rows)
        }
        createBoard(matrixArray)
    }

    function createBoard(matrixArray){
        const board = document.querySelector('.main-board')
        let str = "";
        matrixArray.map(row => {
            str += `
            <div class="row">`
            row.map(block => {
                str += `
                    <div class="block ${goodCell[block] ? LADDER_CLASS : ''} ${badCell[block] ? SNAKE_CLASS : ''} ${block === 1 ? 'active' : ''} " data-value=${block}>
                      ${block}
                    </div>
                `
            })
            str += `</div>`
        })
        board.innerHTML = str;
    }

    function roll(){
        const dice = document.querySelector("img");
        dice.classList.add("shake");
        setTimeout(() => {
            dice.classList.remove("shake");
            const diceValue = Math.ceil(Math.random()* 6);
            document.querySelector("#dice-id").setAttribute("src", `assets/dice${diceValue}.png`);
            changeCurrentPosition(diceValue);
        }, 1000);
    }

    function changeCurrentPosition(diceValue){
        const activeBlock = document.querySelector('.active');
        const activeBlockValue = parseInt(activeBlock.outerText);
        let presentValue = diceValue + activeBlockValue;
        if (badCell[presentValue]){
            presentValue = badCell[presentValue];
            changeActiveClass(presentValue);
        }
        if (goodCell[presentValue]){
            presentValue = goodCell[presentValue];
            changeActiveClass(presentValue);
        }
        if (presentValue <= (n*n)){
            changeActiveClass(presentValue);
        }
    }

    function changeActiveClass(presentValue) {
        const activeBlock = document.querySelector('.active');
        activeBlock.classList.remove('active');
        const block = document.querySelector(`[data-value = "${presentValue}"]`);
        block.classList.add('active');
    }
}