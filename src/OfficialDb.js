import React from 'react';
import './OfficialDb.css';
import { useStateValue } from './StateProvider';

function OfficialDb({id, image, title, price}) {
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
        <div className="OfficialDb">
            <div className="OfficialDb__info">
                <img className="OfficialDb__image" src={image} alt=""/>
                <p  className="OfficialDb__title">{title}</p>
                <p  className="OfficialDb__price">Ksh {price}
                <span>
                    <button onClick={addToBasket} className="OfficialDb__button">Add To Cart</button>
                </span>
                </p>
            </div>
            
        </div>
    )
}

export default OfficialDb
