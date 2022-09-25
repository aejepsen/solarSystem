import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import MissionsA from '../data/missions';

// - Crie um componente chamado `Missions` dentro da pasta `src/components`.
// - Este componente deve ter uma `div` que envolva todo seu conteúdo e que tenha o atributo `data-testid="missions"`.
// - Renderize o componente `Missions` abaixo do `SolarSystem`, dentro do componente principal `App`.

// - Renderize o componente `Title` dentro do componente `Missions`.
// - O componente `Title` deve ser renderizado recebendo a prop `headline` com o valor "Missões"

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {MissionsA.map((mission) => (<MissionCard
          key={ mission.name }
          name={ mission.name }
          year={ mission.year }
          country={ mission.country }
          destination={ mission.destination }
        />))}
      </div>
    );
  }
}

export default Missions;
