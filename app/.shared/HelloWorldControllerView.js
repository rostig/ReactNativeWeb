import React, { Component } from 'react';
import HelloWorldStore from './stores/HelloWorldStore';

export default class HelloWorld extends Component {
	constructor(props) {
		super(props);
		this.state = getStateFromStore();
		this._onChange = this._onChange.bind(this);
	}

	componentDidMount() {
		HelloWorldStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		HelloWorldStore.removeChangeListener(this._onChange);
	}

	_onChange() {
		this.setState(getStateFromStore());
	}
}

const getStateFromStore = () => {
	return {
		clicksCounter: HelloWorldStore.getClicksCounter()
	}
};

