import React from 'react';
import './Wedges.css';
import { useStateValue } from './StateProvider';

function Wedges({id, image, title, price}) {
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
        <div className="wedges">
            <div className="wedges__info">
                <img className="wedges__image" src={image} alt=""/>
                <p  className="wedges__title">{title}</p>
                <p  className="wedges__price">Ksh {price}
                <span>
                    <button onClick={addToBasket} className="wedges__button">Add To Cart</button>
                </span>
                </p>
            </div>
            
        </div>
    )
}

export default Wedges
