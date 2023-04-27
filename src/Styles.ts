import { AppBar, Grid, Stack, styled } from "@mui/material";
import { BetPositions } from "./Constants";

export const HeaderItem = styled(AppBar)(({ theme }) => ({
    backgroundColor: 'black',
    ...theme.typography.h5,
    padding: theme.spacing(1),
    display: 'inline',
    position: 'static',
    textAlign: 'center',
    float: 'right',
    '& span': {
        marginRight: '2%'
    },
    color: theme.palette.text.secondary,
  }));

  export const PositionItem = styled(Grid)(({ theme }) => ({
    alignItems:'center',
      rowSpacing: 1,
      width: '12%',
      textTransform: "uppercase",
      justifyContent: 'center',
        textAlign: 'center',
    columnSpacing:{ xs: 2},
  }));

export const PositionPanel = styled(Stack)(({ theme }) => ({
    ...theme.typography.h2,
    marginTop: '8%',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
}));

export const ContainerPanel = styled(Grid)(({ theme }) => ({
    backgroundImage: 'linear-gradient(180deg, grey, black);',
    height: '100%',
    color: theme.palette.text.secondary,
}));

export const HeaderPanel = styled(Grid)(({ theme }) => ({
    paddingTop: '1%',
    color: theme.palette.text.secondary,
}));


export const getPositionColor = (position: string) => {
    switch (position) {
        case BetPositions.ROCK: {
            return ["#241763", "#3a49d6"];
        }
        case BetPositions.PAPER: {
            return ["#0f4217", "#27ba3d"];
        }
        case BetPositions.SCISSORS: {
            return ["#6b1a1c", "#d44246"];
        }
        default: {
            return["", ""];
        }
    }
}
