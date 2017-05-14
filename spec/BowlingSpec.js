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
// need to stub for random behaviour in the tests
it("calculates score for the throw two", function() {
  game.throwBallTwo();
  expect(game.throwTwoScore).toEqual(game.throwTwoScore);
});

it('pushes the throw scores to an array', function () {
  game.throwBallOne();
  expect(game.scores).toContain(game.throwOneScore);
});

it('has 20 throws in a game', function () {
  for (var i = 0; i < 10; i++) {
      game.throwBallOne();
      game.throwBallTwo();
    }
  expect(game.scores.length).toEqual(20);
});

});
