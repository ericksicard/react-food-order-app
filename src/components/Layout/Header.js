import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css'

const Header = props => {
    return (
       <>
        <header className={classes.header}>
            <h1>Meal Ordering App</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='Table full off food'/>
        </div>
       </>
    );
};

export default Header;