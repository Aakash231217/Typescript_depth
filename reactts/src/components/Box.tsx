import React,{ ReactNode, Dispatch, SetStateAction } from "react";

type InputValType = string | number;


const Box = <T extends InputValType>({
 label,
 value,
 setter,
}:{
    label:string,
    value:T,
    setter:Dispatch<SetStateAction<string>>;

}) => {
    return (
    <>
    <form>
        <label>{label}</label>
        <input type="text" value={value} onChange={(e)=>setter(e.target.value)}/>
    </form>
  </>)
}

export default Box