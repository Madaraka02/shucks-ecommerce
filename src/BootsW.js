import React from 'react';
import './BootsW.css';
import { useStateValue } from './StateProvider';

function BootsW({id, image, title, price}) {
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
        <div className="bootsW">
            <div className="bootsW__info">
                <img className="bootsW__image" src={image} alt=""/>
                <p  className="bootsW__title">{title}</p>
                <p  className="bootsW__price">Ksh {price}
                <span>
                    <button onClick={addToBasket} className="bootsW__button">Add To Cart</button>
                </span>
                </p>
            </div>
            
        </div>
    )
}

export default BootsW
