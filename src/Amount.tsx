import { connect } from "react-redux";
import { getBalanceByLabel } from "./Utils";
const Amount = (props :  any) =>{
    const { label, balance, winBal, positionsCount } = props;
    const value = getBalanceByLabel(label, balance, winBal, positionsCount);
    return (<><span style={{ color: "#8B8000" }}>{props.label} :</span><span style={{ color: "white" }}>{value}</span></>)
}

const mapStateToProps = function (state: { bal: any; positionsCount: any; winBal: any; }, ownProps: { label: any; }) {
    return {
        balance: state.bal,
        positionsCount: state.positionsCount,
        winBal: state.winBal,
        label: ownProps.label
    }
  }

export default connect(mapStateToProps)(Amount);
