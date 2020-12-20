import React from 'react';
import './Slides.css';
import { useStateValue } from './StateProvider';

function Slides({id, image, title, price}) {
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
        <div className="slides">
            <div className="slides__info">
                <img className="slides__image" src={image} alt=""/>
                <p  className="slides__title">{title}</p>
                <p  className="slides__price">Ksh {price}
                <span>
                    <button onClick={addToBasket} className="slides__button">Add To Cart</button>
                </span>
                </p>
            </div>
            
        </div>
    )
}

export default Slides
