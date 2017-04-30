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

  export function  FetchAllPublishedproduct() {

      var productallid = [];
        firebase.database().ref('data').orderByChild('tissue').on("child_added", (snapshot) => {
              let product = snapshot.val();
              productallid.push({
                Description: product.Description,
                author: product.author,
                contact: product.contact,
                email: product.email,
                lab: product.lab,
                operator: product.operator,
                species: product.species,
                tissue: product.tissue,
                title:product.title,
              });
        });

        console.log(productallid, 'productallid');

        // return(
        //   productallid
        // )

}
