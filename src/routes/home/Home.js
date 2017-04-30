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
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      content: PropTypes.string,
    })).isRequired,
  };

  render() {

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1> Home </h1>
          <h3>Proteome-wide interactive spatial maps</h3>
            We provide on-line browseable proteome-wide spatial maps at your fingertips. This
            resource offers direct access to the data and visualisation software of the state-of-the-art
            pRoloc suite of Bioconductor packages. Choose from a set of datasets, and navigate and search the
            sub-cellular proteomics map using interactive interfaces.
          <br/><br/>
          I you want full control, have a look at our software section. Want to contribute your own data,
          get in touch.
          <br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur tristique nunc at imperdiet. Phasellus porta elementum nulla, sit amet laoreet augue varius id. Phasellus rhoncus, leo sit amet sollicitudin rutrum, turpis risus lobortis purus, quis maximus erat sapien nec odio. Aenean velit enim, eleifend a tristique id, sagittis et nibh. Aenean venenatis pharetra mi a porta. Aliquam pellentesque sem mi, vel euismod neque faucibus sollicitudin. Aenean mollis, purus sit amet consectetur luctus, tortor ante faucibus nulla, sed sagittis dui nulla in felis. Fusce tellus tellus, convallis a imperdiet vel, vehicula ac nibh. Quisque pellentesque maximus lectus non congue. In tristique, orci in tristique finibus, eros enim dapibus ante, eget tincidunt neque nunc a nisi. Nam vitae ex et sapien tincidunt imperdiet.
          <br/><br/>
          Morbi vestibulum sapien imperdiet elit vulputate, vel facilisis enim convallis. Praesent dapibus lectus non ornare mollis. Aliquam lacinia orci leo, vel facilisis nulla ultricies id. Vestibulum vel lacinia ligula. Aliquam ut odio dapibus, pellentesque nunc in, elementum massa. Cras elementum nulla id aliquet tincidunt. Donec vel diam vulputate libero mollis pretium. Duis erat mi, pretium vel purus ut, cursus maximus arcu. Praesent tincidunt enim eget laoreet posuere. Pellentesque ut nisl libero. Nulla sed neque sit amet sem ultrices ultrices.
          <br/><br/>
          Pellentesque condimentum, leo sed iaculis malesuada, leo massa placerat sapien, sit amet lobortis odio lacus in justo. Fusce tincidunt, tortor quis fermentum vulputate, ipsum lectus vestibulum libero, sit amet scelerisque nisl augue vitae nunc. Cras ullamcorper commodo nisi, vitae blandit quam sollicitudin sit amet. Sed tortor eros, dictum eu libero nec, consequat egestas metus. Sed mauris velit, aliquet non tristique at, sagittis non dolor. Sed blandit mauris eget sem suscipit, a eleifend diam mattis. Nam sit amet semper lectus. Aliquam auctor nec enim a cursus.
          <br/><br/>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
