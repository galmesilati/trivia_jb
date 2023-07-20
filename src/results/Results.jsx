import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGames } from "../context/gamesContext";

const Results = () => {

  const gamesState = useGames()
  const navigate = useNavigate()

  const items = Object.values(gamesState.games).map((game) => {
    if (!game.submitted) {
        return null
    }
    return(
        <ListItem key={game.id}>
            <ListItemButton onClick={() => navigate(`/previous-games/${game.id}`)}>
                <ListItemText>{`Game ${game.id}`}</ListItemText>
            </ListItemButton>
        </ListItem>
    )
})

return(
    <>
        <h3>Results</h3>
        <List>
            {items}
        </List>
    </>
)
}

export default Results;