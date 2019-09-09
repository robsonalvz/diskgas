import React, {Component} from 'react';
import {Text, View} from 'react-native';
import createNavigator from './routes';

export default class App extends Component {
  render() {
    const Routes = createNavigator();
    return <Routes />;
  }
}
