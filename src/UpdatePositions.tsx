import { connect } from 'react-redux';
import { DECREMENT_POSITION, INCREMENT_POSITION } from './Constants';
import { checkAddDisabled, getPositionCount } from './Utils';
import { selectInactivePosition } from './reducers/appSelectors';
import { Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



function UpdatePositions(props: { balance: any; positionsCount: any; positionKey: any; dispatch: any; isInactive: any; playerFinalPos: any; }) {
    const { balance, positionsCount, positionKey, dispatch, isInactive, playerFinalPos } = props;
    const currentValue = getPositionCount(positionsCount, positionKey);
    const isAddDisabled = checkAddDisabled(balance) || isInactive === positionKey;
    const isSubtractDisabled = currentValue === 0 || isInactive === positionKey;
    const handleClick = (action: string) => {
        dispatch({ type: action, pos: positionKey })
    }
    if (!playerFinalPos) {
        return (
            <Grid item xs={12}>
                <IconButton size={'medium'} color='success' onClick={() => handleClick(DECREMENT_POSITION)} disabled={isAddDisabled} >
                    <AddIcon />
                </IconButton>
                <IconButton size={'medium'} color='error' onClick={() => handleClick(INCREMENT_POSITION)} disabled={isSubtractDisabled}>
                    <RemoveIcon />
                </IconButton>
            </Grid>
        );
    }
    return null;
}

const mapStateToProps = function (state: { bal: any; positionsCount: any; playerFinalPos: string }, ownProps: { positionKey: string; }) {
    return {
        balance: state.bal,
        positionsCount: state.positionsCount,
        positionKey: ownProps.positionKey,
        isInactive: selectInactivePosition(state),
        playerFinalPos: state.playerFinalPos
    }
}

export default connect(mapStateToProps)(UpdatePositions);