import { BowlingGame } from "./bowling";


describe('A bowling game', () => {
    
  let game:BowlingGame
  beforeEach(() => {
    game = new BowlingGame()
  });

  it('can roll a ball', () => {
    game = game.roll(0);
  })

  it('can play a game with all 0', () => {
    game = rollMany(game, 20, 0);

    expect( game.score() ).toBe(0);
  })

  it('can play a game with all 1', () => {
    game = rollMany(game, 20, 1);

    expect( game.score() ).toBe(20);
  })

  it('can roll a spare', () => {
    game = game.roll(5).roll(5).roll(3);

    game = rollMany(game, 17, 0);

    expect( game.score() ).toBe(16);
  })

  it('can roll a strike', () => {
    game = game.roll(10).roll(1).roll(1);
    
    game = rollMany(game, 16, 0);

    expect( game.score() ).toBe(14);
  })

  it('can roll a perfect game', () => {
    game = rollMany(game, 12, 10);

    expect( game.score() ).toBe(300);
  })


});

function rollMany(game: BowlingGame, rolls: number, pins: number)  {
  for (let i = 0; i < rolls; i++) {
    game = game.roll(pins);
  }

  return game;
}