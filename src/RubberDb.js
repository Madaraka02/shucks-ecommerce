import React from 'react';
import './RubberDb.css';
import { useStateValue } from './StateProvider';

function RubberDb({id, image, title,price}) {
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
        <div className="rubberDb">
            <div className="rubberDb__info">
                <img className="rubberDb__image" src={image} alt=""/>
                <p  className="rubberDb__title">{title}</p>
                <p  className="rubberDb__price">Ksh {price}
                <span>
                    <button onClick={addToBasket} className="rubberDb__button">Add To Cart</button>
                </span>
                </p>
            </div>
            
        </div>
    )
}

export default RubberDb
