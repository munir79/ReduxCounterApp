import { Decrement, Incriment, Reset } from "../Constant/Constant"

  export const IncrimentCounter=()=>{
    return{
        type:Incriment
    }
}
  export const DecrimentCounter=()=>{
    return{
        type:Decrement
    }
}
  export const ResetCounter=()=>{
    return{
        type:Reset
    }
}