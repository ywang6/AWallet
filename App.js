import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import MainBottomTabs from './src/MainBottomTabs';
import NavigationService from './NavigationService';

export default class App extends Component {
  navigator = null;
  
  render() {
    return (
      <MainBottomTabs
        ref={nav=>{
          this.navigator = nav;
          NavigationService.setTopLevelNavigator(nav);
        }}
      />
    );
  }
}
