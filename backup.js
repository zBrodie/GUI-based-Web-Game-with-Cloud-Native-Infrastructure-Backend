const n = 6;
const matrixArray = [];

const goodEvent = {
    3: 11,
    5: 23,
    7:15,
    21:33,
    26:31
}

const badEvent = {
    13: 6,
    9: 4,
    19: 2,
    34: 22,
    29: 16
}
const GOOD_CLASS = "good";
const BAD_CLASS = "bad";

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
                    <div class="block ${goodEvent[block] ? GOOD_CLASS : ''} ${badEvent[block] ? BAD_CLASS : ''} ${block === 1 ? 'active' : ''} " data-value=${block}>
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
    // dice.classList.add("shake");
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
    if (badEvent[presentValue]){
        alert(`Bad event ${presentValue}... move back to ${badEvent[presentValue]}`)
        presentValue = badEvent[presentValue];
        changeActiveClass(presentValue);
    }
    if (goodEvent[presentValue]){
        alert(`Good event ${presentValue} move to ${goodEvent[presentValue]}`)
        presentValue = goodEvent[presentValue];
        changeActiveClass(presentValue);
    }
    if (presentValue <= (n*n)){
        changeActiveClass(presentValue);
    }
}

function changeActiveClass(presentValue){
    const activeBlock = document.querySelector('.active');
    activeBlock.classList.remove('active');
    const block = document.querySelector(`[data-value = "${presentValue}"]`);
    block.classList.add('active');
}