import { Map } from "immutable";

export const INCREMENT_POSITION = 'INCREMENT_POSITION';
export const DECREMENT_POSITION = 'DECREMENT_POSITION';
export const SET_FINAL_POSITION = 'SET_FINAL_POSITION';
export const CLEAR_GAME = 'CLEAR_GAME';
export const computer = 'computer';
export const player = 'player';
export const COMPUTER = 'COMPUTER';
export const PosCount = 'PosCount';
export const PLAYER = 'PLAYER';
export const BET_VALUE = 500;
export const WIN_MULTIPLIER_SINGLE = 7;
export const WIN_MULTIPLIER_DOUBLE = 3;
export const BALANCE = 'BALANCE';
export const BET = 'BET';
export const WIN = 'WIN';
export const success = 'success';
export const error = 'error';
  export enum BetPositions {
    ROCK = 'rock',
    PAPER = 'paper',
    SCISSORS = 'scissors'
  }
export const COMPUTER_POSITIONS = [BetPositions.ROCK, BetPositions.PAPER, BetPositions.SCISSORS]
export const GameRules = Map({
   [BetPositions.ROCK as string] :  BetPositions.SCISSORS,
   [BetPositions.PAPER as string] :  BetPositions.ROCK,
   [BetPositions.SCISSORS as string] :  BetPositions.PAPER
});