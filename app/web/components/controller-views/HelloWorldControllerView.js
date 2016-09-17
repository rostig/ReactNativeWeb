import React from 'react';
import Actions from '../../../.shared/actions/HelloWorldActionCreators';
import HelloWorldControllerViewBase from '../../../.shared/components/controller-views/HelloWorldControllerViewBase';

export default class HelloWorldControllerView extends HelloWorldControllerViewBase {
	render() {
		return (
			<div onClick={Actions.increaseCounter} >
				I am clicked {this.state.clicksCounter}
			</div>
		);
	}
}

