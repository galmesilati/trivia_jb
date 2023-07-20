import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { useReducer } from 'react';
import { GAMES_INITIAL_STATE, GamesContext, GamesDispatchContext, gamesReducer } from './context/gamesContext';
import { Stack } from '@mui/material';

function App() {
  const [games, gamesDispatch] = useReducer(gamesReducer, GAMES_INITIAL_STATE)

  return(
    <>
      <Header />
      <GamesContext.Provider value={games}>
        <GamesDispatchContext.Provider value={gamesDispatch}>
        <Stack direction={'column'} m={'auto'} maxWidth={'30em'}>
          <Outlet />
        </Stack>
        </GamesDispatchContext.Provider>
      </GamesContext.Provider>
    </>
  )
}

export default App;
