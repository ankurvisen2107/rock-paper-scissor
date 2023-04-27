import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { useState } from "react";
import { selectActivePositionsWithCount } from "./reducers/appSelectors";
import { CLEAR_GAME, SET_FINAL_POSITION } from "./Constants";
import { selectedPosition } from "./ModelTypes";
import { selectPositions } from "./Utils";

const ActionPanel = (props: any) => {
    const { activePositions } = props;
    const [isCLicked, setIsClicked] = useState(false);
    function CalculateResult() {
        const { win, compFinalPos, playerFinalPos }: selectedPosition = selectPositions(activePositions);
        setIsClicked(true);
        props.dispatch({ type: SET_FINAL_POSITION, winBal: win, compFinalPos, playerFinalPos });  
    }
    function ClearGame() {
        setIsClicked(false);
        props.dispatch({ type: CLEAR_GAME});
    }
    if (isCLicked) {
        return (<div style={{ textAlign: "center", marginTop: "2%", }}><Button  style={{cursor: 'pointer'}} variant="contained" color="inherit" onClick={ClearGame}>Clear</Button></div>)
            
    } else {
        return (
            <div style={{ textAlign: "center", marginTop: "2%" }}><Button style={{ cursor: 'pointer' }} sx={{
                "&.Mui-disabled": {
                    color: "#c0c0c0",
                }
            }} variant="contained" color="inherit" disabled={!activePositions.length} onClick={CalculateResult}>Play Game</Button></div>)
    }
    
}

const mapStateToProps = function(state: { bal: number; positionsCount: any; }) {
    return {
        balance: state.bal,
        activePositions: selectActivePositionsWithCount(state),

    }
  }

export default connect(mapStateToProps)(ActionPanel);
