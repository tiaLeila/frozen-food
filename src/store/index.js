import React, { createContext } from 'react';
import useCombinedContexts from './contexts';

const store = createContext({});
const { Provider } = store;

const StateProvider = ( { children } ) => {
    const globalState = useCombinedContexts();
    return <Provider value={globalState}>{children}</Provider>
}

export {
    store,
    StateProvider
}