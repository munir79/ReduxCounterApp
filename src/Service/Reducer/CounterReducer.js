import { Decrement, Incriment, Reset } from "../Constant/Constant";

const initialCounter={
    count:0
}

const CounterReducer=(state=initialCounter,action)=>{

    switch (action.type) {
        case Incriment:
            return{
                ...state,
                count:state.count+1
            }
        case Decrement:
            return{
                ...state,
                count:state.count-1
            };
        case Reset:
            return{
                ...state,
                count:0
            };
            
           
    
        default:
          return state;
    }

}

export default CounterReducer;