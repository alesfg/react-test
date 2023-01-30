import { useState, useEffect } from 'react'
import './App.css'
import {
  Link
} from "react-router-dom";


function List() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let skip=0;
        switch (page) {
          case 1:
            skip=0;
            break;
          case 2:
            skip=30;
            break;
          case 3:
            skip=60;
            break;
        
          default:
            break;
        }
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}&skip=${skip}`);
        const data = await response.json();
        console.log("data",data)
        console.log(searchTerm)
        setProducts(data.products.sort());
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    }
    fetchData();
  }, [page, searchTerm]);

  function handlePreviousPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function handleNextPage() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }


  function handleSearchTermChange(event) {
      setSearchTerm(event.target.value);
  }
  
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  console.log(products)

  return (
    <div>
      <h1>Products List</h1>
      <div>
        <input type="text" style={{background:'gray'}} value={searchTerm} onChange={handleSearchTermChange} autoFocus />
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Category</th>
            <th scope="col">Brand</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
              <Link to={`/details`}
              state={[`${product.title}`,`${product.price}`,`${product.description}`, `${product.thumbnail}`]}
               >
                {product.title}
                </Link>
                </td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.category}</td>
              <td>{product.brand}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous Page
        </button>
        <button onClick={handleNextPage} disabled={page === totalPages}>
          Next Page
        </button>
      </div>
    </div>
  );

}

export default List
