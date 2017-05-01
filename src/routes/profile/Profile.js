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
import s from './Profile.css';
import * as firebase from 'firebase';
import Link from '../../components/Link';
import history from '../../core/history';

class Profile extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  deleteAccount(){
    var user = firebase.auth().currentUser;

    user.delete().then(function() {
      console.log("userDeleted");
      browserHistory.push('/');
      // User deleted.
    }, function(error) {
      // An error happened.
    });
  }

  logout = () => {
   firebase.auth().signOut();
   history.push('/');
 };

  render() {
    var user = firebase.auth().currentUser;
    if (user != null) {
      user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: "+profile.providerId);
        console.log("  Provider-specific UID: "+profile.uid);
        console.log("  Name: "+profile.displayName);
        console.log("  Email: "+profile.email);
        console.log("  Photo URL: "+profile.photoURL);
      });
    }

    if (user != null) {
      var email = user.email;
    } else {
      var email = "not logged in"
    }

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
            Email: {email}
            <br/>
            <h2> profile.providerId </h2>
            <button onClick={this.deleteAccount.bind(this)}> delete account </button>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Profile);
