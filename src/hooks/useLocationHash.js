import React, {useState,useEffect} from 'react';
/**
 * return the value of 'window.location.hash', always the 'window.history' changes.
 */
const useLocationHash = () => {
    const [hash, setHash] = useState(window.location.hash);

    const listenToPopstate = () => setHash(`${window.location.hash}`);

    useEffect( () => {
        window.addEventListener('popstate', listenToPopstate);
        return () => window.removeEventListener('popstate', listenToPopstate);
    }, []);

    return hash;
}

export default useLocationHash;