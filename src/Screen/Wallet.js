import React, {Component} from "react";
import {View, Text, StyleSheet, Button} from "react-native";

class Wallet extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Wallet inside</Text>
                <Button title="create a new wallet here" onPress={()=>this.props.navigation.navigate('CreateNewWallet')}/>
            </View>
        );
    }
}

export default Wallet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});