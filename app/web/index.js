import React from 'react';
import { render } from 'react-dom';
import HelloWorldControllerView from './components/controller-views/HelloWorldControllerView';

// load our css
// require('./styles/style.less');

const rootElement = document.getElementById('root');

render(<HelloWorldControllerView />, rootElement);