import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PokemonsList from '../components/PokemonsList';
import { loadPokemons } from '../actions/pokemons';

class PokemonsContainer extends PureComponent {
  static propTypes = {
    pokemons: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string
      })
    ),
    load: PropTypes.func
  }

  render() {

    const { pokemons, load } = this.props;

    return (
      <PokemonsList onLoadClick={load} pokemons={pokemons.map(pokemon => ({
        id: pokemon.url.split(/\D+/)[2],
        ...pokemon
      }))} />
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons.pokemons,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => loadPokemons(dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsContainer);
