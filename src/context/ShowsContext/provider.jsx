import { useState } from 'react';
import { ShowsContext } from './context';

const ShowsProvider = ({ children }) => {
    const [shows, setShows] = useState([]);
    


    const value = {
        shows,
        setShows
        
    };

    return (
        <ShowsContext.Provider value={value}>
        {children}
        </ShowsContext.Provider>
    );
};

export { ShowsProvider };
