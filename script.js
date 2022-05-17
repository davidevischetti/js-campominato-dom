// VARIBILI PER RICHIAMARE GLI
// GLI ELEMENTI HTML
const userLevel = document.getElementById('level');
const startButton = document.getElementById('start');
const gameGrid = document.getElementById('grid');
const scoreMessage = document.getElementById('score');
const loseOrWinMessage = document.getElementById('lose-or-win');

// INIZIO A CREARE LA TABELLA DI GIOCO

// EVENTO PER GENERARE LA GRIGLIA LL'AVVIO DEL GIOCO
startButton.addEventListener ('click', startGameFunc);

//FUNZIONE PER CREARE LA GRIGLIA ALL'INTERNO DELL'EVENTO CLICK DELL'AVVIO
function startGameFunc () {
    // VARIABILE PER RICHIAMARE IL VALORE DEI VARI LIVELLI DI DIFFICOLTA'
    const userChoseLevel = parseInt(userLevel.value);

    // SVUOTO LA GRIGLIA PRIMA DELL'INIZIO DI OGNI NUOVO CICLO
    gameGrid.innerHTML = '';

    // SERIE DI CICLI PER CREARE LA GRIGLIA A SECONDA
    // DELLA DIFFICOLTA SCELTA DALL'UTENTE
    if (userChoseLevel === 2) {
        cicleFunc(49, 'small-grid');
    } else if (userChoseLevel === 1) {
        cicleFunc(81, 'medium-grid');
    } else {
        cicleFunc(100, 'big-grid');
    };
};

// FUNZIONE PER CREARE LE CELLE DELLA GRIGLIA
function createCellFunc () {
    const node = document.createElement('div');
    node.className = 'cell';
    return node;
};

// FUNZIONE PER OTTIMIZZARE I CICLI 
function cicleFunc (numCells,typeCells) {

    let cellsArr = getRandomNumArr (numCells, 1, numCells);
    console.log(cellsArr);

    let myScore = 0;

    for (let i = 0; i < numCells; i ++) {
        const gridCell = createCellFunc();
        let cellsNum = cellsArr[i];
        gridCell.append(cellsNum);
        

        // EVENTO PER CLICCARE LE CELLE 
        // E DICHIARARE PUNTEGGIO, VITTORIA E SCONFITTA
        gridCell.addEventListener ('click', function clickCellFunc() {
            
            if (cellsNum <= 16) {
                gridCell.classList.add('bomb-cell');  
                loseOrWinMessage.innerHTML = 'HAI PERSO!';
                gameGrid.classList.add('unclickable');
            } else {
                gridCell.classList.add('free-cell');
                myScore ++;
                scoreMessage.innerHTML = `PUNTEGGIO: ${myScore}`;
                
                if (myScore == numCells - 16) {
                    loseOrWinMessage.innerHTML = 'HAI VINTO!';
                    gameGrid.classList.add('unclickable');
                };
            };
        });
        gameGrid.append(gridCell);
        console.log(gridCell);
    };
    gameGrid.className = typeCells;
    return;
};

//CREO UNA FUNZIONE CHE GENERI NUMERI RANDOM NON RIPETIBILI
function getRandomNumArr (total, minNum, maxNum) {
    const randomNumArr = [];
    while (randomNumArr.length < total) {
        let randomNumUni = getRandomNum (minNum, maxNum);
        if (!randomNumArr.includes(randomNumUni)) {
            randomNumArr.push(randomNumUni);
        };
    };
    
    return randomNumArr;
};

// FUNZIONE PER CREARE UN NUMERO RANDOM
function getRandomNum (min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) +1;
    return randomNum;
};
