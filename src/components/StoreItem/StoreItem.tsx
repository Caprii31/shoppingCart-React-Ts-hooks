import { StoreItemsType } from '../../context/ContextProvider'
import './index.scss'

type StoreItemProps = {
    item : StoreItemsType,
    key: number
}

export const StoreItem: React.FC<StoreItemsProps> = ({ item }) => {

    
    return (
        <div className="storecard">
            <img src={item.imgUrl} alt="" />
            <div className="storecard__details">
                <div className="storecard__info">
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                </div>
                <button className="shoppingcard__btn">+ Add Item</button>
            </div>
        </div> 
    )
}