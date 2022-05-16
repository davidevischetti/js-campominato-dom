// VARIBILI PER RICHIAMARE LA SCELTA 
// DELLA DIFFICOLTA' E IL BOTTONE DI AVVIO
const userLevel = document.getElementById('level');
const startButton = document.getElementById('start');
const gameGrid = document.getElementById('grid');

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
    for (let i = 0; i < numCells; i ++) {
        const gridCell = createCellFunc();
        gameGrid.append(gridCell);
        console.log(gridCell);
        const randomCellsNum = getRandomNum(numCells, 1, numCells);
        gridCell.append(randomCellsNum);
        console.log(randomCellsNum);
        gridCell.addEventListener ('click', () => gridCell.classList.add('free-cell'));
    };
    gameGrid.className = typeCells;
    return;
};

//CREO UNA FUNZIONE CHE GENERI NUMERI RANDOM NON RIPETIBILI
function getRandomNum (numCells, min, max) {
    const cellsArr = [];
    while (cellsArr.length < numCells) {
        let randomNum = Math.floor(Math.random() * (max - min) +1) +1;
        if (!cellsArr.includes(randomNum)) {
            cellsArr.push(randomNum);
        };
    };
    return cellsArr;
};
