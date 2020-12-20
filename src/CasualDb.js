import React from 'react';
import './CasualDb.css';
import { useStateValue } from './StateProvider';

function CasualDb({id, image, title, price}) {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () =>{
        dispatch({
            type: " ADD_TO_BASKET ",
            item:{
                id: id,
                title: title,
                image: image,
                price: price 
            }
        })
         
    };
    return (
        <div className="casualDb">
            <div className="casualDb__info">
                <img className="casualDb__image" src={image} alt=""/>
                <p  className="casualDb__title">{title}</p>
                <p  className="casualDb__price">Ksh {price}
                <span>
                    <button onClick={addToBasket} className="casualDb__button">Add To Cart</button>
                </span>
                </p>
            </div>
            
        </div>
    )
}

export default CasualDb
