import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ProductView from './ProductView' 
import List from './List';


function App() {
  
  return (
    <Router>
    <Link to="/">Home</Link>

        <Routes>
          <Route exact path="/" element={<List />}>
          </Route>
          <Route exact path="/details" element={<ProductView />} >
          </Route>
        </Routes>
    </Router>
  );

}

export default App
