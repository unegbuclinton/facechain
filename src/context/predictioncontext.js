import { createContext, useReducer  } from "react";

export const PredictionContext = createContext();

export const predictionReducer = (state, action) => {
    switch (action.type) {
        case "GET_ALL_PREDICTIONS":
            return {
                ...state,
                predictions: action.payload,
            };
        case "GET_SINGLE_PREDICTIONS":
            return {
                ...state,
                prediction: action.payload,
            };
        default :
            return state;
    }   
};

export const PredictionContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(predictionReducer, {
        predictions: [],
        prediction: null,
    });

    return (
        <PredictionContext.Provider value={{ ...state, dispatch }}>
            {children}
        </PredictionContext.Provider>
    );
};

