import { type } from "os";

export type AmountObj = {
    type: string;
    value: number;
}

export type SelectObj = {
    label: string;
    value: number;
}

export type selectedPosition = {
    playerFinalPos: string;
    win: number;
    compFinalPos: string;
}