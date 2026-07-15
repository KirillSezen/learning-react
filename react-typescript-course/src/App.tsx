import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router"
import UserPage from "./pages/UserPage"
import TodoPage from "./pages/TodoPage"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to='/'>Users</Link>
        <Link to='/todos'>Todos</Link>

      </div>

      <Routes>
        <Route path="/" element={<UserPage/>}/>
        <Route path="todos" element={<TodoPage/>}/>
        <Route path="*" element={<Navigate to='/' replace/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
