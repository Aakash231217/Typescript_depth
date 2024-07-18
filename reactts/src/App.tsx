import { Children, ReactNode, createContext } from "react"

type ThemeType = "light" | "dark"


interface ThemeContextType{
  theme:ThemeType,
  toggleTheme:()=>void,
}

const ThemeContext= createContext<ThemeContextType | null>({
  theme:"light",
  toggleTheme:()=>{}
});

const ThemeProvider = ({children}:{children:ReactNode})=>{
  return <ThemeContext.Provider value={{theme:"light",toggleTheme:()=>{}}}>
    {Children}
  </ThemeContext.Provider>

}

function App() {

  return (
    <>
    <ThemeProvider>
      </ThemeProvider>
    </>
  )
}

export default App
