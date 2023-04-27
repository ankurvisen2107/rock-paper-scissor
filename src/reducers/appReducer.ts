import { createReducer } from "@reduxjs/toolkit";
import { BET_VALUE, BetPositions } from "../Constants";

export const initialState = {
    bal:4000,
    positionsCount: {
    [BetPositions.ROCK as string]: 0,
    [BetPositions.PAPER as string]: 0,
    [BetPositions.SCISSORS as string]:0},
    winBal: 0,
    playerFinalPos: '',
    compFinalPos: '',
}

const balanceReducer = createReducer(initialState, {
    INCREMENT_POSITION: (state, { pos }) => {
        state.bal = state.bal + BET_VALUE;
        state.positionsCount[pos] = state.positionsCount[pos] - 1;
    },
    DECREMENT_POSITION: (state, { pos }) => {
        state.bal = state.bal - BET_VALUE;
        state.positionsCount[pos] = state.positionsCount[pos] + 1;
    },
    SET_FINAL_POSITION: (state, { winBal, playerFinalPos, compFinalPos }) => {
        state.bal = state.bal + winBal;
        state.winBal = winBal;
        state.playerFinalPos = playerFinalPos;
        state.compFinalPos = compFinalPos;;
    },
    CLEAR_GAME: (state) => {
        state.positionsCount = initialState.positionsCount;
        state.winBal = 0;
        state.playerFinalPos = '';
        state.compFinalPos = '';
    },
})

export default balanceReducer;
