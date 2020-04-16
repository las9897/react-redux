/*
	action 객체를 만드는 액션 생성자들을 선언(action creators)
	여기서 () => ({})은 function()(return {})과 동일한 의미 
	scpoe 이슈와 관계없이 편의상 사용되었음.
*/

import * as types from './ActionTypes.js'

export const create = () => ({
	type: types.CREATE
})

export const remove = () => ({
	type: types.REMOVE
})


export const increment = (index) => ({
	type: types.INCREMENT,
	index
});

export const decrement = (index) => ({
	type: types.DECREMENT,
	index
});

export const setColor = ({index, color}) => ({
	type: types.SET_COLOR,
	index,
	color
});