import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    bookmarks: [],
    keywords: '',
    isVisible: false,
    isSaved: false
}

export const BookmarkContext = createContext(initialState);

export const BookmarkProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addBookmark(bookmark){
        dispatch({
            type: 'ADD_BOOKMARK',
            payload: bookmark
        })
    }

    function removeBookmark(id){
        dispatch({
            type: 'REMOVE_BOOKMARK',
            payload: id
        })
    }

    function validateBookmark(id){
        dispatch({
            type: 'VALIDATE_BOOKMARK',
            payload: id
        })
    }

    function addKeywords(keywords){
        dispatch({
            type: 'ADD_KEYWORDS',
            payload: keywords
        })
    }

    function showSearchResult(flag){
        dispatch({
            type: 'SHOW_SEARCH_RESULT',
            payload: flag
        })
    }


    return (
        <BookmarkContext.Provider value={{
            bookmarks: state.bookmarks,
            keywords: state.keywords,
            isVisible: state.isVisible,
            isSaved: state.isSaved,
            addBookmark,
            removeBookmark,
            addKeywords,
            showSearchResult,
            validateBookmark
        }}>
            {children}
        </BookmarkContext.Provider>
    )
}