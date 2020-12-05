export default class GamePlay {
  constructor() {
    this.cells = document.querySelectorAll('.cell');
    this.win = document.querySelector('.win');
    this.lose = document.querySelector('.lose');
    this.startGame = false;
    this.possibilityToClick = false;
  }

  start() {
    this.startGame = true;
    // this.possibilityToClick = true;
    this.goblinCount = 0;
    this.playerCount = 0;
    this.possibilityToClick = true;
    this.goblin = document.createElement('img');
    this.goblin.classList.add('goblin');
    this.goblin.src = './img/goblin.png';
    this.cells[this.getRandomCellNumber()].appendChild(this.goblin);
    this.interval = setInterval(() => {
      this.possibilityToClick = true;
      this.cells[this.getRandomCellNumber()].appendChild(this.goblin);
      this.goblinCount += 1;
      this.checkGame();
    }, 1000);
  }

  checkGame() {
    const difference = this.goblinCount - this.playerCount;
    if (difference > 5) {
      clearInterval(this.interval);
      this.goblin.parentNode.removeChild(this.goblin);
      this.startGame = false;
      // eslint-disable-next-line no-alert
      alert('Вы проиграли!');
    }
  }

  addPlayerCount() {
    this.playerCount += 1;
  }

  getRandomCellNumber() {
    const arr = [];
    for (let i = 0; i < this.cells.length; i += 1) {
      if (this.getNowGoblinPosition() !== i) {
        arr.push(i);
      }
    }
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // eslint-disable-next-line consistent-return
  getNowGoblinPosition() {
    for (let i = 0; i < this.cells.length; i += 1) {
      if (this.cells[i].firstChild) {
        return i;
      }
    }
  }
}
