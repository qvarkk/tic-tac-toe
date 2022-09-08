// Creating images with factory function (experimenting with it)
function ImageFab(sign, source) {
  const theImage = document.createElement('img');
  theImage.classList.add(sign);
  theImage.setAttribute('src', source);
  theImage.setAttribute('draggable', 'false')
  return {image: theImage}
}
const xImg = ImageFab('x', './x.png');
const oImg = ImageFab('o', './o.png');

// This makes it easier for me to track code state
const gameBoard = {
  gameState: 'x',
  boardState: ['', '', '', '', '', '', '', '', ''],
  boardTiles: document.querySelectorAll('#gridTile'),
  gridUpdate: function() {
    for (let i = 0; i < 9; i++) {
      if (gameBoard.boardState[i] === 'x') {
        gameBoard.boardTiles[i].appendChild(xImg.image.cloneNode(true));
      } else if (gameBoard.boardState[i] === 'o') {
        gameBoard.boardTiles[i].appendChild(oImg.image.cloneNode(true));
      }
    }
  },
  changeGameState: function() {
    if (gameBoard.gameState === 'x') {
      gameBoard.gameState = 'o';
    } else {
      gameBoard.gameState = 'x';
    }
  }
};
// idk if I can fit this in the object, better this way
for (let i = 0; i < 9; i++) {
  gameBoard.boardTiles[i].addEventListener('click', () => {
    if (gameBoard.boardState[i] === '') {
      gameBoard.boardState[i] = gameBoard.gameState;
      gameBoard.gridUpdate();
      gameBoard.changeGameState();
    }
  });
}
