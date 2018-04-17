import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Details from '../components/Details';
import { getDetails } from '../actions/getDetails';

class DetailsContainer extends PureComponent {
  render() {
    const { pokemon, load } = this.props;
    return (
      <div>
        <Details onLoadClick={load} pokemon={this.props.pokemon} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.pokemon.pokemon,
    id: ownProps.match.params.id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    id: ownProps.match.params.id,
    load: () => getDetails(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);
