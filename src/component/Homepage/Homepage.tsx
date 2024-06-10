import React, { useState , useEffect } from "react";
import { useAuthData, useCartData } from "../store/cart";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const Homepage = () => {
  const { deletefunction , cartArray , editfunction ,  removeUserdetail }: any =
  useCartData((state: any) => ({
    cartArray: state.cartArray,
    deletefunction : state.deletefunction,
    editfunction : state.editfunction,
    removeUserdetail : state.removeUserdetail
  
  }));
  const navigate = useNavigate();
  useEffect(() => {
 
    removeUserdetail()
  }, [])
  
 
    const { userArray, userDetails}: any =
    useAuthData((state: any) => ({
      userArray: state.userArray,
      userDetails: state.userDetails,
    
    }));
  console.log(userDetails);
  console.log(cartArray);
    const handleEdit = (item : any) => {
      editfunction(item);


      navigate("/edit")
    }

  return (
    <div className="homepage">
      <div className="homepage__header">
        <h2 className="homepage__headerText">CART-ROOM PLC</h2>
        {userDetails.email != "" && (
          <button className="homepage__button"  onClick={() => navigate("/cart")}>create cart</button>
        )}

        <p className="homepage__para">{userDetails.email || "No Login user"}</p>
      </div>
      <section className="homepage__details">
      
        <div className="homepage__detailsdiv">
          {
            cartArray.map((item  : any , index : any) => {
              return (
<div className="homepage__Cart" key={index}> 
{userDetails.email != "" && <> 
      <button className="homepage__cartbuttondelete"  onClick={() => deletefunction(item.id)}>
          Delete  
        </button> </>  }
            <img src= {item.image} className="homepage__img" />
            <p className="homepage__productText">Name : {item.brand}</p>
            <p className="homepage__productText">Model : {item.model}</p>
            <p className="homepage__productText">Storage : {item.storage}</p>
          </div>
              )
            })
          }
         
          
        </div>
      </section>
    </div>
  );
};

export default Homepage;
