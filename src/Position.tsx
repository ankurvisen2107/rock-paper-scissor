import { connect } from 'react-redux';
import { Chip, Grid, Paper, Typography } from '@mui/material';
import UpdatePositions from './UpdatePositions';
import { getPositionCount } from './Utils';
import { getPositionColor, PositionItem } from './Styles';



function Position(props: { positionsCount: any; name: any; }) {
    const { positionsCount, name } = props;
    const totalBetAmount = getPositionCount(positionsCount, name) * 500;
    const [bgColor,color] = getPositionColor(name);
    return (
        <PositionItem>
            <Grid item xs={7}>
                <Paper variant="outlined" style={{ backgroundColor: bgColor, color: color, borderStyle: 'solid', borderColor: color }}>
                    <Chip label={totalBetAmount} color="primary" />
                    <Typography variant="h4">{name}</Typography>
                </Paper>
            </Grid>
            <Grid item xs={7}>
                <UpdatePositions positionKey={name} />
            </Grid>
        </PositionItem>
    );
}

const mapStateToProps = function (state: { positionsCount: any; }, ownProps: { name: string; }) {
    return {
        positionsCount: state.positionsCount,
        name: ownProps.name
    }
}

export default connect(mapStateToProps)(Position);