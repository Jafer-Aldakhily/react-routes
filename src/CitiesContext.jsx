import { createContext,useState } from "react";
import data from './data.json';


const CitiesContext = createContext({})


export function CitiesProvider({children})
{
    const [cities,setCities] = useState(data.cities)
    return (
    <CitiesContext.Provider value={{cities}}>
        {children}
    </CitiesContext.Provider>
    )
}

export default CitiesContext;

