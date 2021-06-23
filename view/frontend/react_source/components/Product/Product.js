import React, { useState } from 'react';
import {useSelector} from "react-redux";

import Title from './Title';
import ProductInfo from './ProductInfo';

const Product = () => {
    const product = useSelector(state => state.product);
    let ImageUrl = (product === {}) ? '/media/catalog/placeholder/thumbnail.jpg' : '/media/catalog/product/' + product.media_gallery_entries[0].file;

    return (
        <div className='search-result__wrapper'>
            <div className="product-info-main">
                <Title name={product.name}/>
                <ProductInfo price={product.price} status={product.status} sku={product.sku}/>
            </div>
            <div className="product media">
                <img src={ImageUrl} />
            </div>
        </div>
    );
};

export default Product;
