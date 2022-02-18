const AppReducer = (state, action) => {
    switch(action.type){
        case 'REMOVE_BOOKMARK':
            return {
                ...state,
                bookmarks: state.bookmarks.filter(bookmark => bookmark.id !== action.payload)
            }
        case 'ADD_BOOKMARK':
            return {
                ...state,
                bookmarks: [action.payload, ...state.bookmarks]
        }
        case 'VALIDATE_BOOKMARK':
            let result = false;
            state.bookmarks.forEach(book => {
                if(book.id === action.payload){
                    result = true;
                }
            });
            console.log(result)
            return {
                ...state,
                isSaved: result
        }
        case 'ADD_KEYWORDS':
            return {
                ...state,
                keywords: action.payload
        }
        case 'SHOW_SEARCH_RESULT':
            return {
                ...state,
                isVisible: action.payload
        }
    default:
      return state;
    }
}
export default AppReducer;