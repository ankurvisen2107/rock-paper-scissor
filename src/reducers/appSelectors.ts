import { createSelector } from "@reduxjs/toolkit";

const selectPositionsCounts = (state: { positionsCount: []; }) => Object.entries(state.positionsCount);
export const selectActivePositionsWithCount = createSelector(
    selectPositionsCounts,
    positionsCounts => {
        const filtered = positionsCounts.filter(([key, positionsCount]) => positionsCount > 0);
        return filtered.map((filter: any) => ({position: filter[0], count: filter[1]}));
    }
)

export const selectInactivePosition = createSelector(
    selectPositionsCounts,
    positionsCounts => {
        const filtered = positionsCounts.filter(([key, positionsCount]) => positionsCount > 0);
        if (filtered.length === 2) {
            return positionsCounts.filter(x => !filtered.includes(x))[0][0];
        }
    }
)

