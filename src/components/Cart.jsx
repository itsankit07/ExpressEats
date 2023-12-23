import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice';
import toast from 'react-hot-toast';
import CartList from './CartList';

const Cart = () => {
    const cartItems = useSelector((store)=>store.cartData.items);
    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());
        toast.success('Cart is cleared successfully')
    }

    const handlePlaceOrder = () =>{

        dispatch(clearCart());
        toast.success('Cart is ordered successfully')

    }

    const itemprices = cartItems.map((item)=>{
        return(
            item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100
        )
    });
    
    const totalPrice = itemprices.reduce((total,item)=>{
        return total+item;
    },0);

  return (

    <div className='w-full 2xl:w-6/12 md:w-10/12 min-h-screen px-3 mx-auto menu-container pt-28 pb-28'>

{cartItems.length === 0 ? (
        <CartList items={cartItems} />
      ) : (
        <>
          <h2 className="mb-5 text-2xl text-center font-ProximaNovaBlack md:text-3xl lg:text-4xl">
            Welcome to your Cart
          </h2>
          <button
            className="block w-24 mx-auto mb-3 text-sm text-white transition bg-red-600 rounded-md hover:bg-red-500 h-9 md:w-32 md:h-11 md:text-base font-ProximaNovaSemiBold"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>

          <hr />

          <CartList items={cartItems} />

          <hr />

          <div className="flex items-center justify-between mt-4">
            <h3 className="text-xl font-medium">
              Total Price: ₹{Math.trunc(+totalPrice)}
            </h3>
            <button
              className="uppercase bg-orange-400 hover:bg-orange-500 transition text-white font-ProximaNovaSemiBold px-5 py-[11px] cursor-pointer text-[15px]"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </> 
      )}


    </div>


  )
}

export default Cart