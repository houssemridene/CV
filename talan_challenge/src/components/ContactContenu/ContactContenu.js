import { useState } from "react";
import axios from "axios";
import React from "react";
import 'react-toastify/dist/ReactToastify.min.css';
import './ContactContenu.scss'


const baseURL = "http://localhost:8080/message";

function ContactContenu() {
const [message, setMessage] = useState('');

function envoyer() {
  

axios.post(baseURL,{
  message:message
}).then(response =>{
  console.log("le message est envoyè");
})

}
  
         


    return <div className="contactcontenu">


      
     
  
  <div className="form-example">
    
    <input type="text"  value={message}  onChange={(e) => setMessage(e.target.value)}></input>
  </div>
  
  <div className="form-example">
    <button type="submit" onClick={envoyer}>envoyer</button>
  </div>

    
    </div>
    
    }
export default ContactContenu