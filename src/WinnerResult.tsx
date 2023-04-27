import { Alert, Typography } from "@mui/material";
import { connect } from "react-redux";
import { COMPUTER, error, PLAYER, success } from "./Constants";
const WinnerResult = (props: any) => {
    const { winBal, playerFinalPos } = props;
    const winner = winBal > 0 ? PLAYER : COMPUTER;
    const type = winBal > 0 ? success : error;
    if (playerFinalPos) {
        return (
            <div style={{justifyContent: "center", display: "flex"}} >
                <Alert severity={ type } style={{ textAlign: "center", marginTop: "2%", width: "19%" }}>
                <Typography variant="h5">
                    {winner} WON
                </Typography>
                <Typography variant="subtitle1" >
                    YOU WIN : {winBal}
                </Typography>
                </Alert>
            </div> )
    }
    return null;
}

const mapStateToProps = function (state: { winBal: number; playerFinalPos : string}) {
    return {
        winBal: state.winBal,
        playerFinalPos: state.playerFinalPos,
    }
}

export default connect(mapStateToProps)(WinnerResult);