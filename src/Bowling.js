function Game() {
 this.throwOneScore = 0;
 this.throwTwoScore = 0;
 this.startingPins = 10;

}

Game.prototype.throwBallOne = function () {
  var pins = this.startingPins;
  var firstScore = Math.floor((Math.random() * pins) + 0);
  this.throwOneScore += firstScore;
};

Game.prototype.throwBallTwo = function () {
  var throwTwoPins = this.startingPins - this.throwOneScore;
  var secondScore = Math.floor((Math.random() * throwTwoPins) + 0);
  this.throwTwoScore += secondScore;
};
