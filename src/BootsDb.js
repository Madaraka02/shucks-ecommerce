import React from 'react';
import './BootsDb.css';
import { useStateValue } from './StateProvider';

function BootsDb({id, image, title, price}) {
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
        <div className="bootsDb">
            <div className="bootsDb__info">
                <img className="bootsDb__image" src={image} alt=""/>
                <p  className="bootsDb__title">{title}</p>
                <p  className="bootsDb__price">Ksh {price}
                <span>
                    <button onClick={addToBasket} className="bootsDb__button">Add To Cart</button>
                </span>
                </p>
            </div>
            
        </div>
    )
}

export default BootsDb
