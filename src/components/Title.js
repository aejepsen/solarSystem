import React from 'react';
import PropTypes from 'prop-types';
// import { render, screen} from '@testing-library/react';

// - Crie um componente chamado `Title` dentro da pasta `src/components`.
// - O componente `Title` deve receber uma prop `headline`.
// - Ele deve conter uma tag `h2`, que deve renderizar o texto recebido pela prop `headline`.

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{ headline }</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
