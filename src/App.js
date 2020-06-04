import React from "react";
import Header from "./components/Header";
import AppDrawer from "./components/AppDrawer";
import DrawerOptionList from "./components/DrawerOptionList";
import { makeStyles } from "@material-ui/core";
import DrawerProvider from "./context/DrawerContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Heroes from "./views/Heroes";
import Teams from "./views/Teams";

// Adding Redux
import { Provider } from "react-redux";
import store from "./store";

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: 240,
      flexShrink: 0,
    },
  },
  contentWrapper: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <Provider store={store}>
        <DrawerProvider>
          <div className="root">
            <Header title="Dota Info" />
            <nav className={classes.drawer}>
              <AppDrawer>
                <DrawerOptionList />
              </AppDrawer>
            </nav>
            <main className={classes.contentWrapper}>
              <div className={classes.toolbar} />
              <Switch>
                <Route exact path="/teams" component={Teams}></Route>
                <Route exact path="/heroes" component={Heroes}></Route>
                <Route path="/" component={Home}></Route>
              </Switch>
            </main>
          </div>
        </DrawerProvider>
      </Provider>
    </Router>
  );
}

export default App;
