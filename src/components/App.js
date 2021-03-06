import React from "react";
import { observer, inject } from "mobx-react";
import logo from "../logo.svg";
import "./App.css";

import PlayerList from "./TeamDetails";
import PlayerDetails from "./PlayerDetails";

import DevTools from "./DevTools";
import Nba from "./nba";
import Team from "./Team";
import ResponsiveDrawer from "./ResponsiveDrawer";
import PersistentDrawer from "./NavBar";
const styles = theme => ({
  // Load app bar information from the theme
  toolbar: theme.mixins.toolbar
});
const App = inject("nba")(
  observer(({ nba }) => (
    <div>
      <div className="App">
        <PersistentDrawer nba={nba} />

        {nba.isLoading ? <h1>Loading...</h1> : renderPage(nba.view)}
      </div>
    </div>
  ))
);

function renderPage(viewStore) {
  switch (viewStore.page) {
    case "nba":
      return <Nba />;
    case "teams":
      return <Team />;
    case "team":
      debugger;
      const book2 = viewStore.selectedTeam;
      if (book2) return <PlayerList book={book2} />;
      else return <h1>Book ${viewStore.selectedBookId} not found!</h1>;
    case "player":
      debugger;
      const player = viewStore.selectedPlayer;
      if (player) return <PlayerDetails book={player} />;
      else return <h1>Book ${viewStore.selectedBookId} not found!</h1>;
    default:
      return "Sry, not found";
  }
}

const AppHeader = () => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to the React MobX Book shop!</h2>
  </div>
);

const AppMenu = ({ children }) => <ul className="App-menu">{children}</ul>;

const AppMenuItem = ({ onClick, children }) => (
  <li>
    <a onClick={onClick}>{children}</a>
  </li>
);

export default App;
