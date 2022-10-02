import { useState, useEffect, useContext } from 'react'
import './index.scss'
import { Context } from '../../context/ContextProvider'
import { StoreItem } from '../../components/StoreItem/StoreItem'
import { StoreItemsType } from '../../context/ContextProvider'



export const Store = () => {

    const { storeItems } = useContext(Context)
    console.log(storeItems)

   
    return (
            <main className="store">
                {storeItems.map(item => (
                    <StoreItem item={item} key={item.id} />
                ))}
            </main> 
    )
}