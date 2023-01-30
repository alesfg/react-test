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
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>{location.state[0]}</td>
              <td>{location.state[1]}</td>
              <td>{location.state[2]}</td>
            </tr>
        </tbody>
      </table>
      <img src={`${location.state[3]}`} />
    </div>
  );

}

export default ProductView
