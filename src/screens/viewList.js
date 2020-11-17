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
import { State } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { delTodoAction } from '../redux/action/addAction'

class viewList extends React.Component {
    render() {
        console.log(this.props.addTodo)
        return (
            <View style={styles.mainStyle}>


                {
                    this.props.addTodo.map((data) => (
                        <View style={styles.listViewStyle} key={data.key}>
                            <View style={styles.dotView}>
                                <View style={[styles.dotColor, { backgroundColor: data.data.color }]} />

                                <View >
                                    <Text style={styles.firstText} >{data.data.title}</Text>
                                    <Text style={styles.secondText} >{data.data.date}</Text>
                                </View>

                            </View>

                            <View >

                                <TouchableOpacity onPress={() => this.props.del(data.key)} >
                                    <Text style={styles.secondText} >Delete</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    ))
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        alignItems: 'center',
        padding: 5
    },
    listViewStyle: {
        width: "100%",
        height: 60,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
    },
    dotView: {
        flexDirection: "row",
        alignItems: 'center'
    },
    firstText: {
        fontSize: 14,
        color: "black"
    },
    secondText: {
        fontSize: 12,
        color: "gray"
    },
    dotColor: {
        height: 15,
        width: 15,
        borderRadius: 25,
        marginHorizontal: 5
    }
});


const mapStateToProps = (state) => {
    return {
        addTodo: state.addTodoReducer.addTodo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        del: (del) => dispatch(delTodoAction(del))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(viewList);
