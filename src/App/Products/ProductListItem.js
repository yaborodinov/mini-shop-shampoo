import React, {useState} from "react";

import "./productListItem.css"



function ProductListItem(){
    const [{ x, y, z}, setX] = useState(false);

    const soldCheckbox = ({ target: { checked } }) => {
        console.log(x, checked);
        setX(checked);
    };
    
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
                        <div className="product__header_libra " onClick={(e) => {
                            e.target.getAttribute("class") === "product__header_libra"?e.target.classList.add("product__header_libra_active"):e.target.classList.remove("product__header_libra_active")
                            e.target.getAttribute("class") === "product__header_libra_img" ? e.target.parentElement.classList.toggle("product__header_libra_active") : e.target.parentElement.style.color="#fff"
                        }} >
                            <div className="product__header_libra_img " ></div>
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
                        <div className="row select_menu">
                            <div className="select_color">
                                <p>Цвет</p>
                                <div></div>
                            </div>
                            <div className="row select_volume">
                                
                                <div className="filter_wrapper">
                                    <input type="checkbox" checked={x}  onChange={soldCheckbox}  />
                                    <label  onChange={soldCheckbox}>100 ml</label>
                                </div>

                                <div className="filter_wrapper">
                                    <input type="checkbox" checked={y} onChange={soldCheckbox} />
                                    <label onChange={soldCheckbox}>200 ml</label>
                                </div>

                                <div className="filter_wrapper">
                                    <input type="checkbox" checked={z} onChange={soldCheckbox} />
                                    <label onChange={soldCheckbox}>300 ml</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-xs-92">
                        <p className="price">200 грн</p>
                    </div>
                </div>

                <div className="row product__order_block">
                    <div className="col-xs-92 product__counter">
                        <div className="row product__counter_row">
                            <div className="decrement_btn">
                                <div className="decrement_btn__inner"></div>
                            </div>
                            <p>1</p>
                            <div className="increment_btn">
                                <div className="increment_btn__inner"></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-302 product__order_buy">
                        <div className="buy_btn">
                            <p>купить</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



export default ProductListItem