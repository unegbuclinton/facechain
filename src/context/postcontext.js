import { createContext, useReducer  } from "react";

export const PostContext = createContext();

export const postReducer = (state, action) => {
    switch (action.type) {
        case "GET_ALL_POST":
            return {
                ...state,
                posts: action.payload,
            };
        case "GET_SINGLE_POST":
            return {
                ...state,
                post: action.payload,
            };
        default :
            return state;
    }   
};

export const PostContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(postReducer, {
        posts: [],
        post: null,
    });

    return (
        <PostContext.Provider value={{ ...state, dispatch }}>
            {children}
        </PostContext.Provider>
    );
};

