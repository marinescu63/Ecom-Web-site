import React from "react";
import Navbar from "./navbar";
import Component from "./Routing";
import ShopContextProvider from "../context/shop-context";
import "./app.css"



function App(){
    
    return(
        <div className="App">
            <ShopContextProvider>
                <div><Navbar />
                    <div className="container">
                    <Component />
                    </div>
                </div>
             </ShopContextProvider>
        </div>
    );
}

export default App;