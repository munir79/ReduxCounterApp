import { useDispatch, useSelector } from "react-redux";
import { DecrimentCounter, IncrimentCounter, ResetCounter } from "../Service/Actions/CounterAction";



const Count = () => {
  const Count =useSelector(state=>state.count);
  const dispatch=useDispatch();
    const handleIncime=()=>{
       dispatch(IncrimentCounter())
    }

    const handleDec=()=>{
        dispatch(DecrimentCounter());
    }

    const handleReset=()=>{
        dispatch(ResetCounter())
    }
    return (
        <div>
            <h3>{Count} </h3>
            <button onClick={handleIncime}>inciment </button>
            <button onClick={handleDec}>Decrement </button>
            <button onClick={handleReset}>Reset </button>
        </div>
    );
};

export default Count;