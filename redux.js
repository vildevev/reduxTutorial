// Everything that changes is contained in a single object: The state tree

// State is read only. You need to dispatch an action if you want to change the state. 

// The state = a minimal representation of the data in your app

// The action = the minimal representation of the change to that data

// Example of dispatching actions:

[object Object] {
	index: 1,
	type: "INCREMENT"
}

[object Object] {
	index: 1,
	type: "DECREMENT"
}

[object Object] {
	filter: "SHOW_COMPLETED"
	type: "SET_VISIBILITY_FILTER"
}

// Pure function: return value depends solely on the input. Doesn't modify the input.
function square(x) {
	return x * x;
}

// Impure functions:
function square(x) {
	updateXInDatabase(x);
	return x = x * x;
}

// State mutations need to be pure functions.

// Reducers take the state, only modifies the neccessary piece, and sets the state equal to a copy of the previous one with the implemented changes. 

const counter(state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
}

// The Redux store:
// 1. Holds the current application state object 
// 2. Let's you dispatch actions
// 3. Specify the reducer that tells how the state is updated with actions

const createStore = (reducer) => {
	let state;
	let listeners = [];

	const getState = () => state;

	const dispatch = (action) => {
		state = reducerr(state, action);
		listeners.forEach(listener => listener());
	};

	const subscribe = (listener) => {
		listeners.push(listener);
		return () => {
			listeners = listeners.filter(l => l !== listener);
		};
	};

	dispatch({});

	return { getState, dispatch, subscribe };
};