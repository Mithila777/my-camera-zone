import React from 'react';
import './Product.css'
import { useNavigate } from 'react-router-dom';


const Product = (props) => {
    const{_id,name, description,price,img,supplier,quantity}=props.product;

    const navigate = useNavigate();

    const navigateToProductDetail = id =>{
        navigate(`/Product/${id}`);
    }
    return (
        <div className='product'>
        <img className='w-100 h-40' src={img} alt="" />

            <div className='productInfo'>
            <p> {name}</p>
             <p>Description:{description}</p> 
             <p>Price:{price}</p>
             <p>Quentity:{quantity}</p>
              <p> Supplier:{supplier}</p>

  <button onClick={() => navigateToProductDetail(_id)} className='btn text-light border-light rounded-0 '>Update</button>


            </div>
        </div>
    );
};

export default Product;