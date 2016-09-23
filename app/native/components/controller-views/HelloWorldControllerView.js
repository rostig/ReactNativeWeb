import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Actions from '../../../_shared/actions/HelloWorldActionCreators';
import HelloWorldControllerViewBase from '../../../_shared/components/controller-views/HelloWorldControllerViewBase';

class HelloWorldControllerView extends HelloWorldControllerViewBase {
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