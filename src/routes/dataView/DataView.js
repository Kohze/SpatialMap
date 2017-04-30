/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 src="https://frapbotbeta.shinyapps.io/uploadGUI/"
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DataView.css';
import Alphabet from './components/Alphabet';


class DataView extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
            <div style={{marginTop: 20}}>

              <iframe  frameBorder="0" style={{height: 100, width: '100%'}}></iframe>
              <svg width="800" height="600">
                   <Alphabet x="32" y="300" />
              </svg>

          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(DataView);
