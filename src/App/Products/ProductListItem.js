import React from "react";

import "./productListItem.css"



class ProductListItem extends React.Component{
    render() {
        return (
            <div className="col-xs-4 product">
                <div className="row product__header">

                    <div>
                        <div className="product__header_status">
                            <p>new</p>
                        </div>
                    </div>

                    <div className="product__header_img">
                        <img src="http://dummyimage.com/256x251/a6a6ff" alt=""/>
                         
                    </div>

                    <div>
                        <div className="product__header_libra">
                            <div className="product__header_libra_img"></div>
                        </div>
                    </div>

                </div>


                <div className="row product__info__block">
                    <h2 className="product__info_title">
                        Шампунь
                    </h2>
                    <p className="product__info_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>

                <div className="row product__select_block">
                    <div className="col-xs-256">
                        <div className="select_color">
                            <p>Цвет</p>
                            <div></div>
                        </div>

                    </div>
                    <div className="col-xs-92">
                        <p className="price">200 грн</p>
                    </div>
                </div>
            </div>
        )
    }
};


export default ProductListItem