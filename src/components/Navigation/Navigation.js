/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import * as firebase from 'firebase';
import history from '../../core/history';

const firebaseConfig = {
    apiKey: "AIzaSyC7iVp_D4iCAOl1e6ymW9TB7aC9E8tbjD4",
    authDomain: "spatialmap-1b08e.firebaseapp.com",
    databaseURL: "https://spatialmap-1b08e.firebaseio.com",
    projectId: "spatialmap-1b08e",
    storageBucket: "spatialmap-1b08e.appspot.com",
    messagingSenderId: "370588224195"
};

firebase.initializeApp(firebaseConfig);

class Navigation extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  constructor (props) {
    super(props);
    this.state = {
      loggedIn: (null !== firebase.auth().currentUser),
    }
  }

  logout = () => {
   firebase.auth().signOut();
   history.push('/');
 };

  render() {
    var loggedIn = (null !== firebase.auth().currentUser);
    console.log({loggedIn})

    const auth = <span>
                  {loggedIn ?
                    <span>
                      <Link className={s.link} to="/profile">Profile</Link>
                      <Link className={s.link} style={{cursor: 'pointer'}} onClick={this.logout.bind(this)}>Logout</Link>
                    </span> : <span>
                      <Link className={s.link} to="/login">Log in</Link>
                      <span className={s.spacer}>or</span>
                      <Link className={cx(s.link, s.highlight)} to="/register">Sign up</Link>
                    </span>
                   }
                  </span>;
    return (
        <div className={s.root} role="navigation">
            <Link className={s.link} to="/">Home</Link>
            <Link className={s.link} to="/datasets">Datasets</Link>
            <Link className={s.link} to="/dataView">DataView</Link>
            <Link className={s.link} to="/about">About</Link>
            <Link className={s.link} to="/contact">Contact</Link>
            <span className={s.spacer}> | </span>
            {auth}
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
