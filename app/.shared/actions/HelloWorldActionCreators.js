import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/HelloWorldActionTypes';

const HelloWorldActionCreators = {
	increaseCounter: function () {
		AppDispatcher.dispatch({
			actionType: ActionTypes.INCREASE_COUNTER
		});
	}
};

export default HelloWorldActionCreators;
