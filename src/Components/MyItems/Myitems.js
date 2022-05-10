import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import useProducts from '../hooks/useProducts';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';



const Myitems = () => {
    const [user,loading] = useAuthState(auth);
   const username= user.displayName;
    const [products,setProducts]=useProducts();
    const navigate = useNavigate();
    const myproducts = products.filter(product => product.addername === username);


    const navigateToUpdateCamera = id =>{
        navigate(`/UpdateCamera/${id}`);
    }

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure to delete?');
        if(proceed){
            const url = `http://localhost:5000/camera/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })
        }
    }

    return (
        <div>
                 <h2>My Cameras</h2>
              



            <div className='itemtable borderd '>

{
   
       myproducts.map(product=>

    //   <Product key={product.id} product ={product}></Product>
           <Table >
     <div class="container">

  <div class="row border border-dark">
        {console.log('addby:',String(product.addername))}
        {console.log( 'username:',username)}

    <div class="col-sm">
      <td>{product.name}</td>
    </div>
    <div class="col-sm">
    <td>   <img className='tableimage' src={product.img} alt="" /></td>
    </div>
    <div class="col-sm">
    <td>Price:{product.price}</td>
    </div>
    <div class="col-sm">
    <td>Quentity:{product.quantity}</td>
    </div>
    <div class="col-sm">
    <td>Sold:{product.sold}</td>
    </div>
    <div class="col-sm">
<td> Supplier:{product.supplier}</td>

    </div>
    <div class="col-sm">
    <td>  <button onClick={() => navigateToUpdateCamera(product._id)} className='btn btn-dark text-light border-light rounded-0 '>Update</button>
 </td>
    <td><button  onClick={() => handleDelete(product._id)} className='btn btn-dark border-light  text-light rounded-0'> delete</button></td>

    </div>

  </div>
</div>
  
  
</Table>
      )
} 
           <Link to="/AddCamera"> 
        <button  className='btn btn-dark  text-light rounded-0'>Add Camera</button>
                 </Link> 
                    

</div>
            
        </div>
    );
};

export default Myitems;