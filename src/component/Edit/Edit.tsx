import React , {useState} from 'react';
import "./style.scss"
import { useNavigate } from "react-router-dom";
import { useCartData } from '../store/cart';


const Edit = () => {
  const navigate = useNavigate();
  const { cartArray  , createfunction , cartDetails , editMainCart }: any =
  useCartData((state: any) => ({
    cartArray: state.cartArray,
    createfunction  : state.createfunction,
    cartDetails : state.cartDetails,
    editMainCart : state.editMainCart
  }));
 
  const [cartdata, setcartdata] : any = useState({
    brand : cartDetails.brand  || "",
    model : cartDetails.model  || "", 
    storage :  cartDetails.storage || "", 
    id : cartDetails.id,
    image : cartDetails.image
  })

  
    console.log(cartdata);
    const handlecreatecart = (cartdata : any) => {
        
        const dataCart =   cartArray.filter((user: any) => cartdata.id !== user.id);
        const dataAdd = dataCart.push(cartdata)
       
      console.log(dataAdd);
      console.log(dataCart);
      
      
     editMainCart(dataAdd)
     //
     navigate("/homepage")
   
    }

    
    
  return (
    <div  className='edit'>
        <div className='edit__div'>
        
    
        

          <h2 className="edit__header">
        Edit Cart
                 </h2>
        


       

        <input
          placeholder="Brand Of Laptop"
       
          name="brand"
          value={cartdata.brand}
          onChange={(e) =>
            setcartdata({ ...cartdata, [e.target.name]: e.target.value })
          }
          
          className="edit__input"
        />

<input
          placeholder="Model"
       
          name="model"
          
          value={cartdata.model}
          onChange={(e) =>
            setcartdata({ ...cartdata, [e.target.name]: e.target.value })
          }
          className="edit__input"
        />

<input
          placeholder="Storage"
       
          name="storage"
          value={cartdata.storage}
          onChange={(e) =>
            setcartdata({ ...cartdata, [e.target.name]: e.target.value })
          }
          
          className="edit__input"
        />

<button
           
           onClick={() => handlecreatecart(cartdata)}
            className="edit__button"
          >
          Edit Cart
          </button>


     
        </div>
    </div>
  )
}

export default Edit