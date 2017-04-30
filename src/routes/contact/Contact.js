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
import s from './Contact.css';

class Contact extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
            Any questions about this infrastructure or the data? Do you want to get involved,
            contribute data? That's great! Send us an email and we will get back to you as soon
            as possible!
            This resource stems from research performed in the Computational Proteomics Unit and the Cambridge
            Centre for Proteomics at the University of Cambridge.
          <br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra faucibus hendrerit. Sed bibendum rhoncus diam non viverra. In efficitur est ac justo aliquam, ut rhoncus enim interdum. Quisque dignissim ullamcorper odio, a maximus nisi efficitur et. Nam tempus, sem a imperdiet suscipit, massa nunc efficitur lorem, vitae placerat massa lorem quis odio. Nullam sodales non tortor eu venenatis. Sed sollicitudin erat lacinia eros mattis dignissim. Integer sollicitudin auctor ipsum vel fringilla.
          <br/><br/>
            Etiam eu volutpat odio. Duis ac odio ultrices, eleifend justo ultrices, luctus nunc. Integer eget eleifend odio. Nunc ut diam in sapien mattis cursus. Cras non mi et turpis ultrices efficitur et non quam. Fusce fermentum lacus ex, nec auctor risus tempus eget. Donec ac purus sed libero aliquam efficitur.
          <br/><br/>
            Morbi est nunc, consectetur nec eros at, convallis venenatis erat. Donec in eros vehicula, porta risus eu, fringilla nisi. Vestibulum quis posuere magna. Aenean consectetur volutpat nulla, id consequat dui tempus in. Fusce suscipit lobortis metus nec commodo. Mauris sed augue eget libero luctus elementum ac eu turpis. In laoreet molestie dapibus. Nunc tempus augue ut lacus pulvinar, in posuere erat cursus. Integer eu euismod metus. Pellentesque dolor libero, molestie ut ultricies quis, ultrices a purus. Curabitur rutrum imperdiet lacus, eu pellentesque nulla molestie lacinia.
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Contact);
