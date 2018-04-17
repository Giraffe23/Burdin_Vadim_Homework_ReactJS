import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Details from '../components/Details';
import { getDetails } from '../actions/getDetails';

class DetailsContainer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { pokemon, load } = this.props;
    //const id = this.props.match.params.id;
    return (
      <div>
        <Details onLoadClick={load} pokemon={this.props.pokemon} id={this.props.id} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.pokemon
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let id = ownProps.match.params.id;
  console.log(id);
  return {
    load: id => getDetails(dispatch, id)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);
