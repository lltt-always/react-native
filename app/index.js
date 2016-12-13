/**
 * Created by litong on 2016/11/15.
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import MusicPage from './music.js';
import MoviePage from './movie.js';
import CosmeticPage from './cosmetic.js';

export default class app extends Component {

    _navigate(title, component) {
        this.props.navigator.push({
            title: title,
            component: component
        })
    }

    render() {
        return (
            <View style={[this.props.styles.container, this.props.deviceHeigth]}>
                <View>
                    <Text style={this.props.styles.heading}>{this.props.title}</Text>
                </View>
                <View style={[styles.menu, this.props.styles.content]}>
                    <TouchableOpacity>
                        <Text style={[styles.item, this.props.deviceWidth]} onPress={()=> {this._navigate('Music', MusicPage)}}>Music</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[styles.item, this.props.deviceWidth]} onPress={()=> {this._navigate('Movie', MoviePage)}}>Movie</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[styles.item, this.props.deviceWidth]} onPress={()=> {this._navigate('Cosmetic', CosmeticPage)}}>Cosmetic</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        height: 80,
        lineHeight: 80,
        fontWeight: '600',
        textAlign: 'center'
    },
    menu: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

