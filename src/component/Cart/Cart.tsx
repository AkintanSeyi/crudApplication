import React , {useState} from 'react';
import "./style.scss"
import { useNavigate } from "react-router-dom";
import { useCartData } from '../store/cart';


const Cart = () => {
  const navigate = useNavigate();
  const { cartArray  , createfunction , cartDetails  }: any =
  useCartData((state: any) => ({
    cartArray: state.cartArray,
    createfunction  : state.createfunction,
    cartDetails : state.cartDetails,
    
  }));
 
  const [cartdata, setcartdata] : any = useState({
    brand : cartDetails.brand != "" ? cartDetails.brand :   "",
    model : cartDetails.model != "" ? cartDetails.model :   "",
    storage :  cartDetails.storage != "" ? cartDetails.storage :   "",
    id : cartArray.length + 1
  })

  
    console.log(cartdata);
    const handlecreatecart = (cartdata : any) => {
     
        createfunction(cartdata)
        navigate("/homepage")
     
     
    }

    
    
  return (
    <div  className='cart'>
        <div className='cart__div'>
        

        

          <h2 className="cart__header">
          Create Cart   
                 </h2>
        


        <form className='cart__form'  onSubmit = {() => handlecreatecart(cartdata)}>

        <input
          placeholder="Brand Of Laptop"
       
          name="brand"
          value={cartdata.brand}
          onChange={(e) =>
            setcartdata({ ...cartdata, [e.target.name]: e.target.value })
          }
          
          className="cart__input"
        />

<input
          placeholder="Model"
       
          name="model"
          
          value={cartdata.model}
          onChange={(e) =>
            setcartdata({ ...cartdata, [e.target.name]: e.target.value })
          }
          className="cart__input"
        />

<input
          placeholder="Storage"
       
          name="storage"
          value={cartdata.storage}
          onChange={(e) =>
            setcartdata({ ...cartdata, [e.target.name]: e.target.value })
          }
          
          className="cart__input"
        />

<button
           
           onSubmit={() => handlecreatecart(cartdata)}
            className="cart__button"
          >
         Create Cart
          </button>


        </form>
        </div>
    </div>
  )
}

export default Cart