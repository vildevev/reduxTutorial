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