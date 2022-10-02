import { useContext, createContext, useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import storeItemsJ from '../../items.json'



 
type ChildrenProps = {
    children : JSX.Element
}

type ContextProviderProps = {
    
    storeItems: StoreItemsType[] 
}

export type StoreItemsType = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export const Context = createContext<ContextProviderProps>({} as ContextProviderProps)

export const ContextProvider = ({ children }: ChildrenProps) => {

    const [storeItems, setStoreItems] = useState<StoreItemsType[]>(storeItemsJ)
    const contextObject = {
        storeItems
    }

    
    
    // useEffect(()=> {
    //     fetch('https://dummyjson.com/products')
    //     .then(res => res.json())
    //     .then(data => setStoreItems(data.products))
    // }, []); 

    if(storeItems[0] === undefined){
        return (
            <Box sx={{width: '100%'}}>
                <LinearProgress />
            </Box>
        )
    }
    
    return (
        <Context.Provider value={contextObject}>
            {children}
        </Context.Provider>
    )
}