import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartSummary = () => {
  const navigate = useNavigate();
  const { cart, totalPrice } = useCart();
  const itemCount = cart.length;

  return (
    <div
      style={{
        position: 'fixed',
        top: '10px',
        right: '20px',
        background: '#f8f9fa',
        padding: '10px  15px',
        borderRadius: '8px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2',
        fontSize: '16px',
      }}
      onClick={() => navigate('/cart')}
    >
      🛒 &nbsp; 
      {itemCount > 0 ? (
        <>
          {itemCount} item{itemCount > 1 ? 's' : ''} – ${totalPrice.toFixed(2)}
        </>
      ) : (
        'Cart is empty'
      )}
    </div>
  );
};

export default CartSummary;
