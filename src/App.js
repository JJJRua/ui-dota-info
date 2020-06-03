import React from "react";
import Header from "./components/Header";
import AppDrawer from "./components/AppDrawer";
import DrawerOptionList from "./components/DrawerOptionList";
import { makeStyles } from "@material-ui/core";
import DrawerProvider from "./context/DrawerContext";

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
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
        </main>
      </div>
    </DrawerProvider>
  );
}

export default App;
