import React from 'react';
import './CasualW.css';
import { useStateValue } from './StateProvider';

function CasualW({id, image, title, price}) {
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
        <div className="casualW">
            <div className="casualW__info">
                <img className="casualW__image" src={image} alt=""/>
                <p  className="casualW__title">{title}</p>
                <p  className="casualW__price">Ksh {price}
                <span>
                    <button onClick={addToBasket} className="casualW__button">Add To Cart</button>
                </span>
                </p>
            </div>
            
        </div>
    )
}

export default CasualW
