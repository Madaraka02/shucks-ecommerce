import React from 'react';
import './ProductFeatured.css';
import { useStateValue } from './StateProvider';

function ProductFeatured({id, image, title,price}) {
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
        <div className="productFeatured">
            <div className="productFeatured__info">
                <img className="productFeatured__image" src={image} alt=""/>
                <p  className="productFeatured__title">{title}</p>
                <p  className="productFeatured__price">Ksh {price}
                <span>
                    <button onClick={addToBasket} className="productFeatured__button">Add To Cart</button>
                </span>
                </p>
            </div>
            
        </div>
    )
}

export default ProductFeatured
