import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import ActionTypes from '../constants/HelloWorldActionTypes';

const CHANGE_EVENT = 'change';

let clicksCounter = 0;

const HelloWorldStore = Object.assign({}, EventEmitter.prototype, {
	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	getClicksCounter: function() {
		return clicksCounter;
	}
});

HelloWorldStore.dispatchToken = AppDispatcher.register(function (action) {
	switch (action.actionType) {
		case ActionTypes.INCREASE_COUNTER:
			clicksCounter++;
			HelloWorldStore.emitChange();
			break;
	}
});

export default HelloWorldStore;
