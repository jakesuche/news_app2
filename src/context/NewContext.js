import { createContext, useState, useReducer } from 'react'


export const  AppContext = createContext();

const NewsProvider = ({children}) => {

    const [state, setState] = useState([])
    return (
        <AppContext.Provider value={{state,setState}}>
                {children}
        </AppContext.Provider>
    )
}


export default NewsProvider;