import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
//  ref https://github.com/AndressaPonzo . Andressa Ponzo consultei seu código para ajudar a entender o enunciado do projeto, lógica e sintaxe.
//  ref https://github.com/C4BRALL João Cabral consultei seu código para ajudar a entender o enunciado do projeto, lógica e sintaxe.
