import { useEffect, useState } from 'react'

export const useLocalStorage = (name, defaultValue = '') => {
    let [state, setState] = useState(JSON.parse(localStorage.getItem(name)) || defaultValue);
    useEffect(() => {
        if (state) {
            localStorage.setItem(name, JSON.stringify(state))
        }
    }, [state])
    return [state, setState]
}
