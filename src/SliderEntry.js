import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from './SliderEntry.style';

export default class SliderEntry extends Component {

    get image () {
        const { data: { illustration }, parallax, parallaxProps} = this.props;

        return parallax ? (
            <ParallaxImage
              source= {require('../img/btc-shape.png')}
              containerStyle={[styles.imageContainer, styles.imageContainerEven]}
              style={styles.image}
              parallaxFactor={0.35}
              showSpinner={true}
              spinnerColor={'rgba(255, 255, 255, 0.4)' }
              dimensions={{width:160, height:120}}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: illustration }}
              style={styles.image}
            />
        );
    }

    render () {
        const { data: { title, subtitle }} = this.props;

        const uppercaseTitle = title ? (
            <Text
              style={[styles.title, styles.titleEven]}
              numberOfLines={2}
            >
                { title.toUpperCase() }
            </Text>
        ) : false;

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              onPress={() => { alert(`You've clicked '${title}'`); }}
              >
                <View style={styles.shadow} />
                <View style={[styles.imageContainer, styles.imageContainerEven]}>
                    { this.image }
                    <View style={[styles.radiusMask, styles.radiusMaskEven]} />
                </View>
                <View style={[styles.textContainer, styles.textContainerEven]}>
                    { uppercaseTitle }
                    <Text
                      style={[styles.subtitle,styles.subtitleEven]}
                      numberOfLines={2}
                    >
                        { subtitle }
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}