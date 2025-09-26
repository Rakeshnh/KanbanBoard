
import './App.css'
import Board from './components/Board'
import { BoardProvider } from './components/BoardContext'
import Kanban from './Kanban'

function App() {
  

  return (
    <div>
    <Kanban/>
   <BoardProvider>
    <Board/>
    
   </BoardProvider>
   </div>
  )
}

export default App
