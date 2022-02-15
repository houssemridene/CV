import {
  BrowserRouter,
  Route,
  Routes
  
} from "react-router-dom";
import Contact from "./pages/Contact";

import Parcours from "./pages/Parcours";
import Motivation from "./pages/Motivation";
import Competences from "./pages/Competences";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import './App.css';




function App() {
  return (

    <BrowserRouter>
      <Routes>
      
        <Route path="/" exact element={<Profile/>} />
        <Route path="/parcours" element={<Parcours/>} />
        <Route path="/competences" element={<Competences/>} />
        <Route path="/motivation" element={<Motivation/>} />
         <Route path="/contact" element={<Contact/> } />
        <Route  element={<NotFound/>} />
        
        
        </Routes>

    </BrowserRouter>
    
  );
}

export default App;
