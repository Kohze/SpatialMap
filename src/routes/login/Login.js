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
import s from './Login.css';
import * as firebase from 'firebase';
import history from '../../core/history';


class Login extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  googleLogin = (type) =>{
     return () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        }).then(() => {
          event.preventDefault(); // prevent full page reload
          // change current location without full page reload
          history.push(`/`);
        });
    }
  }

  handleSubmit = (type) => {
    return () => {
      const email = this.email.value;
      const pw = this.password.value;
      if (type === 'login') {
        firebase.auth().signInWithEmailAndPassword(email, pw).catch(function(error) {
          this.setState({ error: error.message });
        }).then(() => {
          event.preventDefault(); // prevent full page reload
          // change current location without full page reload
          history.push(`/`);
          });
      } else {
        firebase.auth().createUserWithEmailAndPassword(email, pw).then(() => {
        }).catch((error) => this.setState({ error: error.message })).then(() => {
          event.preventDefault(); // prevent full page reload
          // change current location without full page reload
          history.push(`/`);
            });
      }
    }
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>

          <div className={s.formGroup}>
            <a className={s.google} onClick={this.googleLogin('google')}>
              <svg
                className={s.icon}
                width="30"
                height="30"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d={'M30 13h-4V9h-2v4h-4v2h4v4h2v-4h4m-15 2s-2-1.15-2-2c0 0-.5-1.828 1-3 ' +
                  '1.537-1.2 3-3.035 3-5 0-2.336-1.046-5-3-6h3l2.387-1H10C5.835 0 2 3.345 2 7c0 ' +
                  '3.735 2.85 6.56 7.086 6.56.295 0 .58-.006.86-.025-.273.526-.47 1.12-.47 1.735 ' +
                  '0 1.037.817 2.042 1.523 2.73H9c-5.16 0-9 2.593-9 6 0 3.355 4.87 6 10.03 6 5.882 ' +
                  '0 9.97-3 9.97-7 0-2.69-2.545-4.264-5-6zm-4-4c-2.395 0-5.587-2.857-6-6C4.587 ' +
                  '3.856 6.607.93 9 1c2.394.07 4.603 2.908 5.017 6.052C14.43 10.195 13 13 11 ' +
                  '13zm-1 15c-3.566 0-7-1.29-7-4 0-2.658 3.434-5.038 7-5 .832.01 2 0 2 0 1 0 ' +
                  '2.88.88 4 2 1 1 1 2.674 1 3 0 3-1.986 4-7 4z'}
                />
              </svg>
              <span>Log in with Google</span>
            </a>
          </div>
          <div className={s.formGroup}>
            <a className={s.twitter} href="/login/twitter">
              <svg
                className={s.icon}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d={'M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8'}
                />
              </svg>
              <span>Log in with Github</span>
            </a>
          </div>
          <strong className={s.lineThrough}>OR</strong>

          <form>
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
               <button className={s.button} onClick={this.handleSubmit('signUp')}>
                 Log in
               </button>
            </div>
         </form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Login);
