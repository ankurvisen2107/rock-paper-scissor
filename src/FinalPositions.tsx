
import { Typography } from "@mui/material";
import { connect } from "react-redux";
const FinalPositions = (props: { playerFinalPos: string; compFinalPos: string; }) => {
    const { playerFinalPos, compFinalPos } = props;
   
    if (playerFinalPos) {
        return (
            <div style={{ textAlign: "center", marginTop: "5%" }}>
                <Typography color="whitesmoke" display="inline" variant="h3" component="h3">
                    {playerFinalPos.toUpperCase()}
                    </Typography>
                    <Typography display="inline" variant="subtitle1" component="h2">
                        (player)
                </Typography>
                <Typography color="yellowgreen" display="inline" variant="h4">    VS    </Typography>
                <Typography color="whitesmoke" display="inline" variant="h3" component="h3">
                    {compFinalPos.toUpperCase()}
                    </Typography>
                    <Typography display="inline" variant="subtitle1">
                        (computer)
                    </Typography>
            </div> 
        )
    }
    return (null);
}

const mapStateToProps = function (state: { playerFinalPos: string; compFinalPos: string; }) {
    return {
        playerFinalPos: state.playerFinalPos,
        compFinalPos: state.compFinalPos
    }
}

export default connect(mapStateToProps)(FinalPositions);