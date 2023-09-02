import Home from "../pages/Home/Home"
import About from "../pages/About/about"
import Cart from "../pages/Cart/cart";
import { Route, Routes} from "react-router-dom";
import Shop from "../pages/Shop/shop";


export default function Component(){
    return (
    <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={ <Cart />} />
        <Route path="/" element={ <Shop />} />
    </Routes> )
}