import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Datasets.css';
import * as firebase from 'firebase';
import Link from '../../components/Link';
import FetchAllPublishedproduct from './functions.js';
import Datasetchild from './Datasetchild.js';


class Datasets extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  };



  componentWillMount(){

      var productallid = [];

        firebase.database().ref('data').orderByChild('tissue').on("child_added", (snapshot) => {
              let product = snapshot.val();

              // console.log(product,'snapshot.val()');
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
                varName: product.varName,
              });
        });

        this.setState({
          productallid
        })
  }


  render() {

    //console.log(this.state.productallid, 'productallid');
    // if(this.state.productallid != []){
    var DataSetItem = this.state.productallid.map((detail)=>{
         <Datasetchild item = {detail} />

    })
   //}

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          {DataSetItem}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Datasets);
