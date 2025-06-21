import { TURNS } from "../constants"
import { WinnerModal } from "./WinnerModal"
import { Square } from "./Square"

export function Board({board, updateBoard, turn, winner, resetGame}){
    return(
        <main className='board'>
            <h1>Tic Tac Toe</h1>
            <section className='game'>
              {
                board.map((element, index) => {
                  return(
                    <Square
                      key={index}
                      index={index}
                      updateBoard={updateBoard}
                    >
                      {element}
                    </Square>
                  )
                })
              }
            </section>
    
            <section className='turn'>
              <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
              <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
            </section>
    
            <WinnerModal winner={winner} resetGame={resetGame} />
            
        </main>
    )
}