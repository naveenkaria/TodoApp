import * as React from 'react';
import { StyleSheet, Image } from "react-native";
import { Actions, Router, Scene, Stack, Tabs } from 'react-native-router-flux'
import Login from './screens/login'
import viewList from './screens/viewList'
import addList from './screens/addList'
import profile from './screens/profile'

class Navigation extends React.Component {

    render() {

        return (
            <Router>
                <Tabs key="root" hideTabBar>

                    <Scene hideTabBar hideNavBar >
                        <Scene key="home" component={Login} initial />
                    </Scene>

                    <Scene key="root" tabBarStyle={styles.tabBarStyle} showLabel={false} hideNavBar tabs={true}>

                        <Scene
                            key="viewList" component={viewList}
                            title="Todo"
                            titleStyle={styles.titleStyle}
                            showLabel
                            icon={({ focused }) => (
                                <Image style={{ height: 50, width: 50 }} source={focused ? require("./Assets/activeFeed.png") : require("./Assets/unactiveFeed.png")} />
                            )}
                            navigationBarStyle={styles.navigationBarStyle} />

                        <Scene key="addList" component={addList}
                            title="Add"
                            titleStyle={styles.titleStyle}
                            icon={({ focused }) => (
                                <Image style={{ height: 50, width: 50 }} source={focused ? require("./Assets/activePlus.png") : require("./Assets/unactivePlus.png")} />
                            )}
                            navigationBarStyle={styles.navigationBarStyle} />

                        <Scene key="profile" component={profile} showLabel
                            titleStyle={styles.titleStyle}
                            icon={({ focused }) => (
                                <Image style={{ height: 50, width: 50 }} source={focused ? require("./Assets/activeUser.png") : require("./Assets/unactiveUser.png")} />
                            )}
                            navigationBarStyle={styles.navigationBarStyle} />

                    </Scene>
                </Tabs>
            </Router >
        )
    }
}

const styles = StyleSheet.create({
    navigationBarStyle: {
        backgroundColor: '#4CD964'
    },
    titleStyle: {
        color: "white"
    },
    tabBarStyle: {
        paddingLeft: 30,
        paddingRight: 30
    }
})

export default Navigation