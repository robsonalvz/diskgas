import React, {Component} from 'react';
import {Text, ScrollView} from 'react-native';
import api from '../../services/api';
import HomeItem from './HomeItem';
export default class Home extends Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    const {data} = await api.get('api/products');
    console.table(data);
    this.setState({data});
  }
  render() {
    return (
      <ScrollView>
        {this.state.data.map(product => (
          <HomeItem key={product.id} data={product} />
        ))}
      </ScrollView>
    );
  }
}
