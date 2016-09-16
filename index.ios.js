import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import HelloWorldControllerView from './app/native/components/controller-views/HelloWorldControllerView';

class ReactNativeWeb extends Component {
  render() {
    return (
      <HelloWorldControllerView/>
    );
  }
}

AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb);
