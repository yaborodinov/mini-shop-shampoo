import React from "react";


import "./product.css"
import ProductListItem from "./ProductListItem"
import productsData from "./ProductsData"





class Product extends React.Component{
    
    render() {
        return (
            <div className="row">

                {
                    productsData.map(({
                        id,
                        name,
                        description,
                        image,
                    }) => (
                        <ProductListItem key={id}
                            name={name}
                            description={description}
                            image={image}
                        />
                    ))
                }
                
                {/* <ProductListItem />
                <ProductListItem /> */}

                
            </div>
            
        )
    }
};

export default Product 