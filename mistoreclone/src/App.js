
import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import Slider from './components/Slider'
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
          <Router>
             <PreNavbar/>
             <Navbar/>
             <Slider/>
          </Router>  
          );
}

export default App;