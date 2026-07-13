import { BrowserRouter} from 'react-router'
import Navbar from './UI/Navbar'
import AppRouter from './components/AppRouter'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App