import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./product";
import {useState} from "react";
import "./options.css"



export default function Shop (){

    const [selectedCategory, setSelectedCategory] = useState("all")

    const handleCategoryChange = (event) =>{
        setSelectedCategory(event.target.value);
    };

    const filteredProducts = selectedCategory === "all" ? PRODUCTS : PRODUCTS.filter (product => product.category === selectedCategory);

    return (
        <div className="shop">
            <div className="shopTitle">
                <h1 >ROB'S SHOP</h1>
                </div>
                <div className="categoryFilter">
                    <h1>Select Category</h1>
                    <select value={selectedCategory} onChange={handleCategoryChange}>
                        <option className="option" value="all">All</option>
                        <option className="option" value="phones">phones and accesories</option>
                        <option className="option" value="computers">Computers</option>
                    </select>
                </div>
                <div className="products">{filteredProducts.map((product)=> 
                    <Product key={PRODUCTS.id} data={product} />)}
                </div>

        </div>
    );
}