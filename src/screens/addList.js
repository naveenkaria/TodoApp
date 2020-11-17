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
import { connect } from "react-redux"
import { addTodoAction } from '../redux/action/addAction'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
class addList extends React.Component {
    constructor() {
        super();

        this.state = {
            colors: [
                { key: 1, color: "#4A90E2" },
                { key: 2, color: "#7ED321" },
                { key: 3, color: "#D0021B" },
                { key: 4, color: "#BD10E0" },
                { key: 5, color: "#F5A623" }
            ],
            title: "",
            date: new Date(),
            SelectedColor: "",
            show: false,
            selectedDate: null
        }
    }


    onChange(event, day) {
        const currentDate = moment(day).format("MMMM Do YYYY") || this.state.date;
        console.log(currentDate)
        // setShow(Platform.OS === 'ios');
        this.setState({ selectedDate: currentDate, show: false });
    };


    render() {
        return (
            <View style={styles.mainStyle}>
                <TextInput
                    placeholder="When do you need to do?"
                    placeholderTextColor="gray"
                    style={styles.inputStyle}
                    value={this.state.title}
                    onChangeText={(text) => this.setState({ title: text })}
                />

                <TouchableOpacity onPress={() => this.setState({ show: true })} style={styles.dataSelectButton}>
                    <Text style={[styles.dataSelectText, { color: !this.state.selectedDate ? "gray" : "black" }]}>{!this.state.selectedDate ? "When is it due?" : this.state.selectedDate}</Text>
                </TouchableOpacity>

                {this.state.show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={this.state.date}
                        mode={"date"}
                        is24Hour={true}
                        display="default"
                        onChange={(event, day) => this.onChange(event, day)}
                    />
                )}

                <View style={styles.colorsView} >

                    {
                        this.state.colors.map((color) => (
                            <TouchableOpacity key={color.key}
                                onPress={() => this.setState({ SelectedColor: color.color })}
                                style={[styles.colorButton, { backgroundColor: color.color }]} />
                        ))
                    }

                </View>

                <TouchableOpacity onPress={() => {
                    this.props.add({
                        title: this.state.title,
                        date: this.state.selectedDate,
                        color: this.state.SelectedColor
                    })
                    this.setState({ title: "", selectedDate: null })
                }
                } style={styles.AddButton}>
                    <Text style={styles.AddText}>Add</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        alignItems: "center",
        padding: 5
    },
    inputStyle: {
        width: "100%",
        height: 100,
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 5,
        fontSize: 12,
        paddingLeft: 10,
        paddingTop: 10,
        margin: 3,
        textAlignVertical: "top"
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
    dataSelectButton: {
        marginTop: 10,
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "flex-start",
        borderRadius: 5,
        borderColor: "lightgray",
        borderWidth: 1,
        paddingLeft: 10
    },
    dataSelectText: {
        fontSize: 12,
    },
    AddButton: {
        marginTop: 10,
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: "#4CD964",
    },
    AddText: {
        color: "white",
        fontSize: 16
    },
    colorsView: {
        width: "100%",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center"
    },
    colorButton: {
        marginHorizontal: 6,
        width: 50,
        height: 50,
        borderRadius: 25
    }
});

const mapStateToProps = (state) => {
    console.log(state)
    return {
        addTodo: state.addTodoReducer.addTodo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (addTodo) => dispatch(addTodoAction(addTodo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addList);
