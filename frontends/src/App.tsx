
import AppRouter from './routes/AppRouter'
import { useTheme } from "./stores/ThemeProvider";
import "./App.css";   // for night mode/ light mode

// this function renders functional componenet
const App: React.FC = () => {   // React:FC  => functional component
  const { theme } = useTheme();   
  return (
    // theme dark xa vane dark mode ma janxa
    <div className='App' data-theme={theme==="dark" && "dark" }>    
      <AppRouter/>
    </div>
  )
}

export default App
