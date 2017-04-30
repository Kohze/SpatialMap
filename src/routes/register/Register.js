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
import s from './Register.css';
import * as firebase from 'firebase';

class Register extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (type) => {
    return () => {
      const email = this.email.value;
      const pw = this.password.value;
      if (type === 'login') {
        firebase.auth().signInWithEmailAndPassword(email, pw).catch(function(error) {
          this.setState({ error: error.message });
        });
      } else {
        firebase.auth().createUserWithEmailAndPassword(email, pw).then(() => {
        }).catch((error) => this.setState({ error: error.message }));
      }
    }
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <form >
            <div className={s.formGroup} >
               <div style={{'marginBottom': 10}}>
                 <input
                   className={s.input}
                   ref={(email) => this.email = email}
                   id="email"
                   name="email"
                   autoFocus
                 />
               </div>
                 <input
                   className={s.input}
                   ref={(password) => this.password = password}
                   id="pw"
                   type="password"
                   name="password"
                 />
             </div>
             <div className={s.formGroup}>
               <button className={s.button} onClick={this.handleSubmit('login')}>
                 Log in
               </button>
            </div>
         </form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Register);
