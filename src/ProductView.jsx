import './App.css'
import { useLocation } from 'react-router-dom'

function ProductView() {

    const location = useLocation();
    console.log(location.state);//"any type"
  
  return (
    <div>
      <h2>Product View</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>{location.state[0]}</td>
              <td>{location.state[1]}</td>
            </tr>
        </tbody>
      </table>
    </div>
  );

}

export default ProductView
