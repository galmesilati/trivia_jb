import { useParams } from "react-router-dom";
import Quiz from "./quiz/Quiz";
import { useGames } from "../context/gamesContext";

const SubmittedGame = () => {
  
  const params = useParams()
  const gamesState = useGames()

  const gameId = params.gameId
  
  return(
    <Quiz gameData={gamesState.games[gameId]}/>
  )

  
}

export default SubmittedGame;