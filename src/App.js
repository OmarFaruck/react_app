 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import About from './componant/About/About';
import Footer from './componant/Footer/Footer';
import Header from './componant/Header/Header'; 
import Home from './componant/Home/Home';
 

function App() {
  return (
    <div className="App"> 
     <Header/> 
     
     <Routes> 
      <Route path="/" element={<Home />} />
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path="/about" element={<About />} />
     </Routes>

      
     <Footer/> 
    </div>
  );
}

export default App;
