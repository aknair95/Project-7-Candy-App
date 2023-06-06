import CartIcon from "../cart/cartIcon";
import classes from "./headerCartBtn.module.css";
import CartContext from "../../store/cartContext";
import { useContext } from "react";

const HeaderCartBtn=(props) =>{
    const cartCtx=useContext(CartContext);
 
    const cartItemQty=cartCtx.items.reduce((itemCount,item) =>{
        return itemCount+Number(item.qty);                          //using Number function to convert string to number
    },0);

    return (
        <button className={classes.button} onClick={props.onClickCart}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>CART</span>
            <span className={classes.badge}>{cartItemQty}</span>
        </button>
    )
}

export default HeaderCartBtn;