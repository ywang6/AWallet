import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Header, Icon} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  amount: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

const Row = (props) => (
  <View style={styles.container}>
    <Icon name={props.icon} color='black' />
    <Text style={styles.text}>
      {`${props.status}`}
    </Text>
    <Text style={styles.amount}>
      {`${props.amount}`}
    </Text>
  </View>
);

export default Row;