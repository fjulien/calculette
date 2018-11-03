import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import Affichage from './containers/Affichage';
import BoutonsList from './containers/BoutonsList';
import History from './containers/History';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Affichage />
          <BoutonsList />
          <History />
        </Container>
      </div>
    );
  }
}

export default App;
