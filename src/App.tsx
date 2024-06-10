import React from 'react'
import {Route , Routes} from  "react-router-dom";
import Auth from './component/Auth/Auth';
import Homepage from './component/Homepage/Homepage';
import Cart from './component/Cart/Cart';
import Edit from './component/Edit/Edit';


const App = () => {
  return (
    <div>
             <Routes>
                  <Route path = "/" element  = {<Auth/>}   />
                  <Route path = "/homepage" element  = {<Homepage/>}      />
                  <Route path = "/cart" element  = {<Cart/>}      />
                  <Route path = "/edit" element  = {<Edit/>}      />
                  </Routes>
    </div>
  )
}

export default App