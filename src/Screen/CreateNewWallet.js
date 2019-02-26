import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";

class CreateNewWallet extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>create a new Wallet</Text>
            </View>
        );
    }
}

export default CreateNewWallet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});