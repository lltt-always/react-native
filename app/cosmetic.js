/**
 * Created by litong on 2016/11/15.
 */

import React, { Component } from 'react';
import { ListView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class CosmeticPage extends Component {
    // 初始化模拟数据
    render() {
        return (
            <View style={[this.props.styles.container, this.props.deviceHeigth]}>
                <View>
                    <Text style={this.props.styles.heading}>{this.props.title}</Text>
                </View>
                <View style={this.props.styles.content}>
                    <Text>CosmeticPage</Text>

                </View>
                <TouchableOpacity>
                    <Text onPress={()=>this.props.navigator.pop()} style={this.props.styles.footer}>back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}