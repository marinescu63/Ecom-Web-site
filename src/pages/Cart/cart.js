import { PRODUCTS } from "../../products";
import {ShopContext} from "../../context/shop-context";
import {useContext} from "react";
import {CartItem} from "./cart-item"
import "./cart.css"



 


export default function Cart() {
    const {cartItems, getTotalAmount} = useContext(ShopContext);
    const totalAmount = getTotalAmount()
;
    return (

    <div className="cart" >


        <div>
            <h1>Cart items</h1>
        </div>
        <div className="cartItems">
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !==0 ){
                return <CartItem  data={product} />;
              }
                else {
                    return null;
                }

            })}
        </div>
        {totalAmount >0 ? (
            <div className="checkout">
                <p>Subtotal: ${totalAmount}</p> 
                <div className="checkbtn">
                <button>Check out</button>
                <button>Continue Shoping</button>
                </div>
            </div>

                 ) : (
                <h1 >Cart empty</h1>

        )}

            
    </div>
    )
}