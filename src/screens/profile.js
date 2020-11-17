/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import AsyncStorage from '@react-native-community/async-storage'


class Profile extends React.Component {

    componentDidMount() {
        AsyncStorage.getItem("username")
            .then(res => Actions.refresh({ title: `Hello, ${JSON.parse(res)}` }))
            .catch(err => console.log(JSON.stringify(err)))
    }

    render() {
        return (
            <View style={styles.mainStyle}>
                <TouchableOpacity
                    onPress={() =>
                        Actions.home() || AsyncStorage.removeItem("username")}
                    style={styles.loginButtonStyle}
                >
                    <Text style={styles.logoutStyle}>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 5
    },
    loginButtonStyle: {
        width: "100%",
        height: 50,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        margin: 3,
        borderWidth: 1,
        borderColor: "red"
    },
    logoutStyle: {
        fontSize: 14,
        color: "red"
    }
});


export default Profile;
