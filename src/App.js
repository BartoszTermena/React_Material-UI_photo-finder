import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Nav from './components/navbar/Nav'
import Search from './components/search/Search'
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Nav />
          <Search />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
