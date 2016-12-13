/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { AppRegistry, Navigator, StyleSheet, Text, View, StatusBar, Dimensions, PixelRatio } from 'react-native';

import App from './app';

class example extends Component {

    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.PushFromRight;
    }

    componentDidMount(){
        StatusBar.setBarStyle("light-content");
    }

    render() {
        let {height, width} = Dimensions.get('window');
        let pxielRatio=PixelRatio.get();
        return (
            <Navigator
                style={{flex: 1}}
                initialRoute={{ title: 'App', index: 0, component: App }}
                configureScene={this.configureScene}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component
                        title = {route.title}
                        navigator = {navigator}
                        styles = {styles}
                        deviceWidth = {{width: width}}
                        deviceHeight = {{height: height}}
                        pxielRatio = {pxielRatio}
                    />
                }}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF'
    },
    content: {
        flex: 1
    },
    heading: {
        textAlign: 'center',
        paddingTop: 22,
        paddingBottom: 10,
        backgroundColor: '#000000',
        color: '#FFFFFF',
        fontWeight: '600'
    },
    footer: {
        height: 50,
        color: '#FFFFFF',
        backgroundColor: '#000000',
        textAlign: 'center',
        lineHeight: 50,
        fontWeight: '600'
    }
});

AppRegistry.registerComponent('example', () => example);
