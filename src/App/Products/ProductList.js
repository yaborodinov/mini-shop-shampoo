import React from "react";

import "./product.css"
import ProductListItem from "./ProductListItem"


class Product extends React.Component{
    render() {
        return (
            <div className="row">
                <ProductListItem />
                <ProductListItem />
                <ProductListItem />

                
            </div>
            
        )
    }
};

export default Product 