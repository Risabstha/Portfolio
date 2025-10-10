
import AppRouter from './routes/AppRouter'
import { useTheme } from "./stores/ThemeProvider";
import "./App.css";   // for night mode/ light mode

const App = () => {
  const { theme } = useTheme();   
  return (
    <div className='App' data-theme={theme==="dark" && "dark" }>
      <AppRouter/>
    </div>
  )
}

export default App
