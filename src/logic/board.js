import { WINNER_COMBOS } from "../constants"

export const checkWinner = (boardToCheck) => {
    for(const combo of WINNER_COMBOS){
      // Comprobar si aún quedan movimientos disponibles (en caso de no quedar y no haber ganador, significa empate)
      /* const found = boardToCheck.includes(null)
      if(!found){
        return false
      } */

      // Revisamos todas las posibles combinaciones ganadoras de X u O
      const [a, b, c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    } 
      
    
    // Si no hay ganador
    return null
}

export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
}