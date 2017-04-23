/**
 * Created by davidchains on 4/16/17.
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import {Header} from './Components/common';

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View>
                <Header headerText="Tect Stack "/>
            </View>
        </Provider>
    );
}




export default App;