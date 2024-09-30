import { it, expect, describe, vi } from 'vitest';
import { Game } from './game';

describe('Game', () => {
  it('should return an instance of a game', () => {
    // This is mostly a dummy test.
    const game = new Game();
    expect(game).toBeInstanceOf(Game);
  });

  it('should have a secret number', () => {
    // Thisn't really a useful test.
    // Do I *really* care about the type of the secret number?
    // Do I *really* care about the name of a "private" property?
    const game = new Game();
    expect(game.secretNumber).toBeTypeOf('number');
  });
});
