import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Details from '../components/Details';
import { getDetails } from '../actions/getDetails';

class DetailsContainer extends PureComponent {
  constructor(props) {
    super(props);
  }
  handlerButton = (id) => () => {
    const { load } = this.props;
    load(id);
  }

  render() {
    const { pokemon, load } = this.props;
    const id = this.props.match.params.id;
    return (
      <div>
        <Details onLoadClick={this.handlerButton(id)} pokemon={this.props.pokemon} id={this.props.id} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.pokemon.pokemon
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    load: id => getDetails(dispatch, id)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);
