import React, { Component } from 'react';
import HelloWorldStore from '../../../.shared/stores/HelloWorldStore';
import Actions from '../../../.shared/actions/HelloWorldActionCreators';
import Bla from '../../../.shared/HelloWorldControllerView';

export default class HelloWorld extends Bla {


	render() {
		return (
			<div className="hello-world" onClick={Actions.increaseCounter} >
				I am clicked sss {this.state.clicksCounter}
			</div>
		);
	}
}

