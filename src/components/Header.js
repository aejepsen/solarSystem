import React from 'react';

// - Crie um componente chamado `Header` dentro da pasta `src/components`. Este componente irá renderizar o título principal da página.
// - Ele deve conter uma tag `header` e, dentro dela, uma tag `h1`. O texto da tag `h1` deve ser "Sistema Solar".
// - Renderize o componente `Header` dentro do componente principal `App`.

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Sistema Solar</h1>
      </header>
    );
  }
}

export default Header;
