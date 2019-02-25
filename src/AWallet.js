import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Dimensions, Platform, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './SliderEntry.style';
import SliderEntry from './SliderEntry';
import styles, { colors } from './main.style';
import { ENTRIES } from './MockedEntries';
import { Header} from 'react-native-elements';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;
//import BitcoinButton from "./components/presentation/BitcoinButton.js";

export default class AWallet extends Component {
    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
    }

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
            <View style={{flex: 1, width: 100 + '%', height: 100 + "%"}}>
                {/* <View style={styles.tempNav} >
                    <Text>AWallets</Text>
                </View> */}

                <Header
                    centerComponent={{ text: 'AWallets', style: { color: 'rgba(22, 43, 85, 1)' } }}
                    rightComponent={{ icon: 'menu', color: 'rgba(22, 43, 85, 1)' }}
                    backgroundColor='white'
                />

                <View style={styles.walletBar}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text>Wallets</Text>
                    </View>

                    <View style={{alignItems: "center"}}>
                        <Text style={{ fontSize: 30}}>+</Text>
                    </View>
                </View>
                
                <Carousel
                    data={ENTRIES}
                    renderItem={this._renderItemWithParallax}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={true}
                    firstItem={SLIDER_1_FIRST_ITEM}
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={0.7}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    loop={true}
                    loopClonesPerSide={2}
                    autoplay={false}
                    onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                
            </View>
        );
    }
}
