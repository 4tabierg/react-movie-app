import {createContext, useReducer, useEffect}  from 'react'

const initialState = {
    favorites: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : []
}

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case 'REMOVE_MOVIE':
            return {
                favorites: state.favorites.filter((movie) => movie.id !== action.payload)
            }
        default:
            return state;
    }
}

const AppContext = createContext();


export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
    }, [state]);

    return (
        <AppContext.Provider value={{
            favorites: state.favorites,
            dispatch,
        }}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContext