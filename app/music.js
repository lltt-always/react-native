/**
 * Created by litong on 2016/11/15.
 */

import React, { Component } from 'react';
import { ListView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class MusicPage extends Component {
    // 初始化模拟数据

    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([{
                text: '傻女',
                img: require('../img/1.png')
            },{
                text: '世界真细小',
                img: require('../img/2.png')
            },{
                text: 'Hero',
                img: require('../img/3.png')
            },{
                text: '傻女',
                img: require('../img/1.png')
            },{
                text: '世界真细小',
                img: require('../img/2.png')
            },{
                text: 'Hero',
                img: require('../img/3.png')
            },{
                text: '傻女',
                img: require('../img/1.png')
            },{
                text: '世界真细小',
                img: require('../img/2.png')
            },{
                text: 'Hero',
                img: require('../img/3.png')
            }, {
                text: '傻女',
                img: require('../img/1.png')
            }]),
        }
    }

    _renderRow(rowData) {
        return (
            <View style={styles.listContainer}>
                <Image source={rowData.img} style={styles.imageContainer}/>
                <Text style = {styles.list}>
                    {rowData.text}
                </Text>
            </View>
        )
    }

    render() {
        return (
            <View style={this.props.styles.container}>
                <View>
                    <Text style={this.props.styles.heading}>{this.props.title}</Text>
                </View>
                <View style={this.props.styles.content}>
                    <ListView
                        dataSource = {this.state.dataSource}
                        renderRow = {this._renderRow}
                    />
                </View>
                <TouchableOpacity>
                    <Text onPress={()=>this.props.navigator.pop()} style={this.props.styles.footer}>back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#BBBBBB',
        paddingLeft: 5
    },
    list: {
        paddingLeft: 5,
        fontSize: 18
    },
    imageContainer: {
        height: 30,
        width: 30
    }
})