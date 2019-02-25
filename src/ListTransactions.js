import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Row from './Row';
import styles from './Row';
import {ListView} from 'react-native';
import data from './MockedTransactionsData';
import TransactionsHeader from './TransactionsHeader';
import TransactionsFooter from './TransactionsFooter';

class ListTransactions extends Component {
    constructor(props) {
        super(props);
    
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(data)
        };
    }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Row {...rowData} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        renderHeader={() => <TransactionsHeader/>}
        // renderFooter={() => <TransactionsFooter />}
      />
    );
  }
}

export default ListTransactions;