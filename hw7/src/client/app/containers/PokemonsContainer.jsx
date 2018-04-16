import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import PokemonsList from '../components/PokemonsList';
import { loadPokemons } from '../actions/pokemons';

class PokemonsContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      id: '',
      loading: false
    };
  }

  componentWillMount() {
    this.setState({
      loading: true
    });

    fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
      .then(response => response.json())
      .then(response => response.results)
      .then(pokemons => {
        this.setState({
          loading: false,
          pokemons: pokemons.map(pokemon => ({
            id: pokemon.url.split(/\D+/)[2],
            ...pokemon
          }))
        });
      });
  }

  render() {
    const { loading, pokemons } = this.state;

    return <div>{loading ? 'Идет загрузка' : <PokemonsList pokemons={pokemons} />}</div>;
  }
}

function mapStateToProps(state) {
  return {
    pokemons: state.pokemons
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps);
