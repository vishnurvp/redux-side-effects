import classes from './CartButton.module.css';
import { cartActions } from '../../GlobalStore/cartReducer';
import { useDispatch, useSelector } from 'react-redux';


const CartButton = (props) => {
  const totalItems = useSelector(state=>state.cart.totalItems)
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(cartActions.openCart());
  }
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
