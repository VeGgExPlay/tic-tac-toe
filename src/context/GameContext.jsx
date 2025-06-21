import { createContext, useState } from "react";
import { TURNS } from "../constants";

// 1.- Crear el contexto - Este es el que tenemos que consumir
export const GameContext = createContext()

// 2.- Crear el Provider - Proveer el contexto - Este nos provee de acceso al contexto
export function GameProvider({children}){
    const [board, setBoard] = useState(Array(9).fill(null)) // Este es el tablero
    
    const [turn, setTurn] = useState(TURNS.X)
    
    const [winner, setWinner] = useState(null) // null es que no hay ganador y false es que hay empate.

    return(
        <GameContext.Provider value={{
            board,
            setBoard,
            turn,
            setTurn,
            winner,
            setWinner
        }}>
            {children}
        </GameContext.Provider>
    )
}