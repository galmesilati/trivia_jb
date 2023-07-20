import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { useReducer } from 'react';
import { GAMES_INITIAL_STATE, GamesContext, GamesDispatchContext, gamesReducer } from './context/gamesContext';

function App() {
  const [games, gamesDispatch] = useReducer(gamesReducer, GAMES_INITIAL_STATE)

  return(
    <>
      <Header />
      <GamesContext.Provider value={games}>
        <GamesDispatchContext.Provider value={gamesDispatch}>
          <Outlet />
        </GamesDispatchContext.Provider>
      </GamesContext.Provider>
    </>
  )
}

export default App;
