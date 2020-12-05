export default class GameController {
  constructor(gamePlay) {
    this.gamePlay = gamePlay;
    this.startGame = document.querySelector('.start-game');
    this.allCells = document.querySelector('.container');
    this.win = document.querySelector('.win');
    this.init();
  }

  init() {
    this.startGame.addEventListener('click', () => {
      if (!this.gamePlay.startGame) {
        this.gamePlay.start();
      }
    });
    this.allCells.addEventListener('click', () => {
      if (this.gamePlay.startGame) {
        // eslint-disable-next-line no-restricted-globals
        if (event.target.classList.contains('goblin')) {
          if (this.gamePlay.possibilityToClick) {
            this.win.innerText = parseFloat(this.win.innerText) + 1;
            this.gamePlay.addPlayerCount();
          }
          this.gamePlay.possibilityToClick = false;
        }
      }
    });
  }
}
