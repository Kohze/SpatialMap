import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Datasets.css';
import * as firebase from 'firebase';
import Link from '../../components/Link';

class Datasetchild extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    console.log(this.props.item,'item value is');
    return (
          <div style={{height: 200, width: 200, backgroundColor: 'grey'}}>
            <Link to='/dataView'><div> {this.props.item.varName} </div></Link>
          </div>
    );
  }
}

export default withStyles(s)(Datasetchild);
