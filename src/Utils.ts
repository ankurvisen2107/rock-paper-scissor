
import { COMPUTER_POSITIONS, BET_VALUE, WIN_MULTIPLIER_DOUBLE, WIN_MULTIPLIER_SINGLE, GameRules, BALANCE, BET, WIN } from "./Constants";
import { selectedPosition } from "./ModelTypes";

export const checkAddDisabled = (balance: number) => balance < BET_VALUE;

const getRandomPosition = () => COMPUTER_POSITIONS[Math.floor(Math.random() * COMPUTER_POSITIONS.length)];


export const selectPositions = (playerPositions: []) => {
    const multiplier = playerPositions.length > 1 ? WIN_MULTIPLIER_DOUBLE : WIN_MULTIPLIER_SINGLE;
    let playerLostPosition = '';
    const compFinalPos = getRandomPosition();
    let result: selectedPosition = {
        compFinalPos,
        win: 0,
        playerFinalPos: ''
    };
    playerPositions.forEach(({ position, count }: { position: string, count: number }) => {
        if (position !== compFinalPos && compFinalPos === GameRules.get(position)) {
            result = { ...result, win: result.win += count * BET_VALUE * multiplier, playerFinalPos: position }
        } else {
            playerLostPosition = position;
        }
    });
    if (!result.playerFinalPos) {
        result = { ...result, playerFinalPos: playerLostPosition }
    }
    return result;
}

export const getPositionCount = (positonsCount: any, position: string) => positonsCount[position];

export const getBetBalance = (positons: { [x: string]: number; }) => {
    return Object.keys(positons).reduce((prev, curr) => {
        return prev + positons[curr];
    }, 0) * BET_VALUE;
};

export const getBalanceByLabel = (label: string, balance: number, winBal: number, positions: any) => {
    switch (label) {
        case BALANCE: {
            return balance;
        }
        case WIN: {
            return winBal;
        }
        case BET: {
            return getBetBalance(positions);
        }
        default: {
            break;
        }
    }
}



