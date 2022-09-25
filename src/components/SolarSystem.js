import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

// 5
// - Renderize o componente `Title` dentro do componente `SolarSystem`.
// - O componente `Title` deve ser renderizado recebendo a prop `headline` com o valor "Planetas".
// 6
// - Renderize uma lista com os planetas do Sistema Solar dentro component `SolarSystem`.
// - Utilize o componente `PlanetCard` para renderizar cada item da lista de planetas.
// - Você encontrará a lista com os nomes e as imagens de cada planeta do Sistema Solar no arquivo `src/data/planets.js`.
// - Você deve importar a lista no componente `SolarSystem` usando o código:
// ```javascript: import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { Planets.map((planet) => (<PlanetCard
          key={ planet.name }
          planetName={ planet.name }
          planetImage={ planet.image }
        />))}
      </div>
    );
  }
}

export default SolarSystem;
