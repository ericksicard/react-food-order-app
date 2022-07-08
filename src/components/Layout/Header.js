import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return (
       <>
        <header className={classes.header}>
            <h1>Meal Ordering</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='Table full off food'/>
        </div>
       </>
    );
};

export default Header;