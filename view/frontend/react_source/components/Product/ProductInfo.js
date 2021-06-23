import React, { useState } from 'react';

const ProductInfo = (props) => {
    return (
        <div className="product-info-price">
            <div className="price-box price-final_price">
                        <span className="normal-price">
                            <span className="price-container price-final_price tax weee">
                                <span className="price-wrapper ">
                                    <span className="price">${props.price}</span>
                                </span>
                            </span>
                        </span>
            </div>
            <div className="product-info-stock-sku">
                <div className="stock available">
                    <span>{props.status ? "In stock": "Out of stock" }</span>
                </div>
                <div className="product attribute sku">
                    <strong className="type">SKU</strong>
                    <div className="value">{props.sku}</div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
