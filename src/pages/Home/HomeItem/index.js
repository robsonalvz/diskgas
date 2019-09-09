import React from 'react';
import styles from './styles';
import {Text, View} from 'react-native';

// import { Container } from './styles';

const HomeItem = ({data}) => (
  <View style={styles.container}>
    <Text style={styles.name}>{data.name}</Text>
    <Text style={styles.description}>{data.description}</Text>
    <Text style={styles.price}>{data.price}</Text>
  </View>
);

export default HomeItem;
