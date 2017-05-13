describe("Bowling Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
    pins = 10;
  });

// need to stub for random behaviour in the tests
it("calculates a score for the throw one", function() {
  game.throwBallOne();
  expect(game.throwOneScore).toEqual(game.throwOneScore);
});

it("calculates score for the throw two", function() {
  game.throwBallTwo();
  expect(game.throwTwoScore).toEqual(game.throwTwoScore);
});

});
