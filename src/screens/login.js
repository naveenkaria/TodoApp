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
    TouchableOpacity,
    Image
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import AsyncStorage from '@react-native-community/async-storage'

class Login extends React.Component {
    constructor() {
        super()

        this.state = {
            username: ""
        }
    }

    render() {
        return (
            <View style={styles.mainStyle}>

                <View style={styles.todoLogoView}>
                    <Image resizeMode="contain" style={styles.todoLogo} source={require("../Assets/logo.png")} />
                    <Text style={styles.todoLogoText} >Todo</Text>
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        placeholder="Name"
                        placeholderTextColor="gray"
                        style={styles.inputStyle}
                        onChangeText={(text) => this.setState({ username: text })}
                    />
                    <TouchableOpacity onPress={() => { Actions.viewList() || AsyncStorage.setItem("username", JSON.stringify(this.state.username)) }} style={styles.loginButtonStyle}>
                        <Text style={styles.loginTextStyle} >LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5
    },
    inputView: {
        justifyContent: "flex-end",
        width: "100%",
        alignItems: "center"
    },
    inputStyle: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        fontSize: 16,
        paddingLeft: 15,
        margin: 3
    },
    loginButtonStyle: {
        width: "100%",
        height: 50,
        borderRadius: 5,
        backgroundColor: "#4CD964",
        justifyContent: "center",
        alignItems: "center",
        margin: 3
    },
    loginTextStyle: {
        fontSize: 16,
        color: "white"
    },
    todoLogo: {
        marginTop: "30%",
        maxHeight: 150,
        maxWidth: 130
    },
    todoLogoView: {
        alignItems: "center"
    },
    todoLogoText: {
        fontSize: 16
    }
});


export default Login;
