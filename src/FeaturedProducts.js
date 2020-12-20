import React from 'react';
import './FeaturedProducts.css';
import ProductFeatured from './ProductFeatured';

function FeaturedProducts() {
    return (
        <div className="featuredProducts">
            {/* <div className="featuredProducts__title">
            <h2>FEATURED PRODUCTS</h2>
            <hr/>
            </div> */}
            <ProductFeatured
            id="1"
            image="https://www.shoemart.biz/wp-content/uploads/2020/08/wsxdecgfhjk-600x600.jpg"
            title="Chunky Comfy Sneakers Black"
            price={2700}
            />
             <ProductFeatured
              id="12"
            image="https://www.shoemart.biz/wp-content/uploads/2020/08/xderft5gyhujikol-600x600.jpg"
            title="Chunky Comfy Sneakers Black"
            price={2700}
            />
             <ProductFeatured
              id="13"
            image="https://www.shoemart.biz/wp-content/uploads/2020/08/44qe2rt5yuiiuyt5re3w2.jpg"
            title="Chunky Comfy Sneakers Black"
            price={2700}
            />
             <ProductFeatured
              id="14"
            image="https://www.shoemart.biz/wp-content/uploads/2020/05/fghujkol.jpg"
            title="Chunky Comfy Sneakers Black"
            price={2700}
            />
            <ProductFeatured
             id="15"
            image="https://www.shoemart.biz/wp-content/uploads/2020/08/esdrftgyhui9o.jpg"
            title="Chunky Comfy Sneakers Black"
            price={2700}
            />
            <ProductFeatured
             id="16"
            image="https://www.shoemart.biz/wp-content/uploads/2020/08/ERT4ERD.jpg"
            title="Chunky Comfy Sneakers Black"
            price={2700}
            />
        </div>
    )
}

export default FeaturedProducts
