import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import HelloWorldStore from '../../../.shared/stores/HelloWorldStore';
import Actions from '../../../.shared/actions/HelloWorldActionCreators';

class HelloWorldControllerView extends Component {
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

	render() {
		return (
			<View style={styles.container}>
				<TouchableHighlight onPress={Actions.increaseCounter} underlayColor='transparent'>
					<Text style={styles.welcome}>
						I am clicked {this.state.clicksCounter}
					</Text>
				</TouchableHighlight>
			</View>
		);
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	}
});

export default HelloWorldControllerView;