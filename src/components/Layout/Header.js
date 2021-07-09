//Styles
import classes from "./Header.module.css";
//Images
import meals from "../../assets/meals.jpg";
//Components
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes["main-image"]}>
                <img src={meals} alt="A table full of meals!" />
            </div>
        </>
    );
};

export default Header;
