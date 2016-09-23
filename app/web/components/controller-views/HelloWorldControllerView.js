import React, { Component } from 'react';
import Actions from '../../../_shared/actions/HelloWorldActionCreators';
import HelloWorldStore from '../../../_shared/stores/HelloWorldStore';
import HelloWorldControllerViewBase from '../../../_shared/components/controller-views/HelloWorldControllerViewBase';

export default class HelloWorldControllerView extends Component {
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

	render() {
		return (
			<div onClick={Actions.increaseCounter} >
				I am clicked  {this.state.clicksCounter}
			</div>
		);
	}
}

const getStateFromStore = () => {
	return {
		clicksCounter: HelloWorldStore.getClicksCounter()
	}
};