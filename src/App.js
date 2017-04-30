/**
 * Created by davidchains on 4/16/17.
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import {Header} from './Components/common';
import LibraryList from './Components/LibraryList';


const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={{ flex: 1  }}>
                <Header headerText="Tect Stack "/>
                <LibraryList />
            </View>
        </Provider>
    );
}




export default App;