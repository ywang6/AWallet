import {createStackNavigator, createAppContainer } from 'react-navigation';
import Wallet from './Screen/Wallet';
import CreateNewWallet from './Screen/CreateNewWallet';
import {AppRegistry} from 'react-native';
import AWallet from './Screen/AWallet';

const WalletsStackNavigator = createStackNavigator({
    AWallet: {
        screen: AWallet,
    },
});

const WalletDetailNavigator = createStackNavigator({
    WalletDetail: {
        screen: Wallet,
    },
});

const MainBottomTabs = new createStackNavigator ({
    AWallet: {screen:WalletsStackNavigator},
    WalletDetail: {screen:WalletDetailNavigator},
});

export default createAppContainer(MainBottomTabs);


