/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Datasets.css';
import * as firebase from 'firebase';
import Link from '../../components/Link';
import { FetchAllPublishedproduct } from './functions.js';



 /* function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      FetchAllPublishedproduct
  }, dispatch)
};


componentWillMount(){
  this.props.FetchAllPublishedproduct();
};

*/

class Datasets extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };



  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <div style={{height: 200, width: 200, backgroundColor: 'grey'}}>
            <Link to='/dataView'><button> example dataset </button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Datasets);
