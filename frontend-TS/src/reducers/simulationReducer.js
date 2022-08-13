import React from 'react'

const initialState = {
	data: []
}

export const simulationReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'addSimulate':
			return {
				...state,
				data: [...state.data, action.payload]
			}

		default:
			return state;
	}
}
