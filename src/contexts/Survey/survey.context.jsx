'use client';
import React, { createContext, useContext, useReducer } from 'react';
//Context
const SurveyContext = createContext({});
//Provider
const SurveyProvider = ({ children, initialJson }) => {
	const [state, dispatch] = useReducer(formReducer, initialJson.itens);
	const setAnswer = (questionId, answer) => {
		dispatch({
			type: 'SET_ANSWER',
			questionId,
			answer,
		});
	};
	return (
		<SurveyContext.Provider value={{ setAnswer, surveyState: state }}>
			{children}
		</SurveyContext.Provider>
	);
};
//Hook
const useSurveyContext = () => {
	const context = useContext(SurveyContext);
	return context;
};

//Reducer
const formReducer = (state, action) => {
	switch (action.type) {
		case 'SET_ANSWER':
			return {
				...state,
				[action.questionId]: {
					...state[action.questionId],
					answerValue: action.answer,
				},
			};
		// Add more cases for other actions if needed
		default:
			return state;
	}
};

export { SurveyContext, useSurveyContext, SurveyProvider };
