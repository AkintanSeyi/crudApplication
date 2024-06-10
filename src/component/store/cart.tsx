import { create } from "zustand";
import cartList from "../../list.json"

export const useAuthData = create((set) => ({

 userArray : [],
 userDetails :{
  
email
: 
"",
fullname
: 
"",
password
: 
""
 },
 signUpfunction : (detail : any) => set((state : any) => ({
    userArray : [...state.userArray , detail],
    userDetails : detail
 })),
 signInfunction : (detail : any) => set((state : any) => ({
    userDetails : state.userArray.find((user: any) => detail.email == user.email),
   // userDetails : detail
 }))

}))

export const useCartData = create((set) => ({

    cartArray : cartList,
    cartDetails : {},
    editfunction : (detail : any) => set((state : any) => ({
       
        cartDetails : detail
    })),
    createfunction : (detail : any) => set((state : any) => ({
        cartArray : [...state.cartArray , detail],
       
     })),
     editMainCart : (detail : any) => set((state : any) => ({

       cartArray : [detail],
       
     })),
     removeUserdetail : () => set({ cartDetails : {}}),
    deletefunction : (detailId : any) => set((state : any) => ({
        cartArray : state.cartArray.filter((user: any) => detailId !== user.id),
      
    }))
   
   }))