import React, {useState, useEffect} from 'react';
import './App.css';
import Product from './components/Product';
import {
  Routes,
  Route,
  
} from "react-router-dom";
import Message from './components/Message';
import Checkout from './components/Checkout';


function App() {

  // const [message, setMessage]=useState("")
  // // const location=useLocation();
 
  // useEffect(() => {
  //   // Check to see if this is a redirect back from Checkout
  //   const query = new URLSearchParams(window.location.search);
  
  //     if (query.get("success")) {
  //       setMessage("Order placed! You will receive an email confirmation.");
  //     }
  
  //     if (query.get("canceled")) {
  //       setMessage(
  //         "Order canceled -- continue to shop around and checkout when you're ready."
  //       );
  //       }
   
  // }, []);

 
  return  (

    <div className="App">
    {/* {  message ? (
            <Message message={message}/>
      ):( */}
    <Routes> 
          <Route exact path='/success' element={<Message/>}/>      
          <Route  path="/:product_id" element={<Product/>}/> 
          <Route exact path="checkout/:prod_id" element={<Checkout/>}/>         
    </Routes>
      {/* )} */}
    </div>
    
  );
}

export default App;
