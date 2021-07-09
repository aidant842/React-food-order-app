import { useContext, useEffect, useState } from "react";
//Styles
import classes from "./HeaderCartButton.module.css";
//Components
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnisHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const noOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${
        btnIsHighlighted ? classes.bump : ""
    }`;

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setBtnisHighlighted(true);
        const timer = setTimeout(() => {
            setBtnisHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [cartCtx.items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{noOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
