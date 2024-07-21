import { useReducer} from "react";

type StateType={
  count:number
}
type ActionType=
| {type:"Increment",payload:number} 
| {type:"Decrement",payload:number};
const initialState:StateType = {
  count:0
}

const reducer = (state:StateType,action:ActionType):StateType=>{
  switch(action.type){
    case "Increment":
      return {count:state.count+action.payload}
    case "Decrement":
      return {count:state.count-action.payload}
    default:
      return state
  }
}

{/*type ThemeType = "light" | "dark"


interface ThemeContextType{
  theme:ThemeType,
  toggleTheme:()=>void,
}

export const ThemeContext= createContext<ThemeContextType>({
  theme:"light",
  toggleTheme:()=>{}
});

const ThemeProvider = ({children}:{children:ReactNode})=>{
  const [theme,setTheme] = useState<ThemeType>("light");
  const toggleTheme = ()=>{
    setTheme((prev)=>prev==="light"?"dark":"light");

  };

  return <ThemeContext.Provider value={{theme,toggleTheme}}>
    {children}
  </ThemeContext.Provider>

}
*/}
function App() {
   const [state, dispatch] = useReducer(reducer,initialState)
   const increment=():void=>{
    dispatch({
     type:"Increment",
     payload:1,
    });
   };
   const decrement=():void=>{
    dispatch({
      type:"Decrement",
      payload:1,
    })
   }
  return (

    <>
    <div>
      <h1>Count change</h1>
      <p>Count:{state.count}</p>
      <button onClick={increment}>+</button>
      <br></br>
      <br></br>
      <button onClick={decrement}>-</button>
    </div>
    </>
  )
}

export default App
