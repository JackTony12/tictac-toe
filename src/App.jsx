import "./App.css"
import Board from "./components/board"
import { Context } from "./context/context"
function App() {
  return (
    <Context>
      <Board />
    </Context>
  )
}

export default App
