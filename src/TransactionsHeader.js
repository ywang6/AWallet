import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    input: {
      color:'rgba(22, 43, 85, 1)',
      marginLeft: '5%',
      marginTop: '3%',
      fontWeight: 'bold'
    }
  });
  
  const TransactionsHeader = (props) => (
    <View>
      <Text style={styles.input}>Transactions</Text>
    </View>
  );
  
  export default TransactionsHeader;