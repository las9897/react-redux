import * as types from '../actions/ActionTypes'

const initialState = {
	counters: [
		{
			color: 'black',
			number: 0
		}
	]
};

function counter(state = initialState, action) {
	const { counters } = state;

	switch (action.type) {
		case types.CREATE:
			return {
				counters: [
					...counters,
					{
						color: action.color,
						number: 0
					}
				]
			};

		case types.REMOVE:
			return {
				counters: counters.slice(0, -1)
			}

		case types.INCREMENT:
			return {
				counters: [
					...counters.slice(0, action.index),
					{
						...counters[action.index],
						number: counters[action.index].number + 1
					},
					...counters.slice(action.index + 1)
				]
			}
		case types.DECREMENT:
			return {
				counters: [
					...counters.slice(0, action.index),
					{
						...counters[action.index],
						number: counters[action.index].number - 1
					},
					...counters.slice(action.index + 1)
				]
			}
		case types.SET_COLOR:
			return {
				counters: [
					...counters.slice(0, action.index),
					{
						...counters[action.index],
						color: action.color
					},
					...counters.slice(action.index + 1)
				]
			}
		default:
			return state
	}
}


export default counter;