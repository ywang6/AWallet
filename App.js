import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import AWallet from './src/AWallet.js';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AWallet />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
