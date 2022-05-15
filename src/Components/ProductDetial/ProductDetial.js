import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './ProductDetail.css'

const ProductDetail = () => {
    const { Id } = useParams();
    const [camera, setCamera] = useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/camera/${Id}`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setCamera(data));

    }, []);
    const preQuentity = parseInt(camera.quantity);
    const preSold =parseInt(camera.sold);
    const addername =camera.addername;
        const name = camera.name;
        const description = camera.description;
        const price = camera.price;
        const supplier = camera.supplier;
        const img = camera.img

    const manageQuentity =event =>{
        const quantity= preQuentity-1;

        const sold= parseInt(preSold+1);
        
        const UpdateCamera= {addername, name,description,img, price,quantity,supplier,sold};
        console.log(UpdateCamera);

        const url = `http://localhost:5000/camera/${Id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateCamera)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            window.location.reload();
            event.target.reset();



        })

    }

    const updateQuentity =event =>{
        const newquantity =parseInt(event.target.quentity.value)
        const quantity = parseInt (preQuentity + newquantity);
        const sold= camera.sold;
        
        const UpdateCamera= {addername, name,description,img, price,quantity,supplier,sold};
        console.log(UpdateCamera);

        const url = `http://localhost:5000/camera/${Id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateCamera)
        })
        .then(res => res.json())
        .then(data =>{
            alert('Camera  Restock successfully !');
            event.target.reset();
            window.location.reload();


        })

    }

    return (
        <div>
          
          <div class="container mt-5 ">
          <div class="row gy-5 gx-0">
    <div class="col-sm-6 col-xs-6  productDetail ">
         <img className='w-10 h-6 img-fluid' src={camera.img} alt="" />
         </div>    
    <div class="col-sm-6 col-xs-6 productDetialInfo">
             <p> {camera.name}</p>
              <p>Description:{camera.description}</p> 
              <p>Quentity:{camera.quantity}</p>
              <p> Sold:{camera.sold}</p>
              <p> Supplier:{camera.supplier}</p>
            
                {/* <Link to="/checkout"> */}
                    <button onClick={()=>{manageQuentity()}} className='btn text-light border-light rounded-0'>Delivered</button>
                {/* </Link> */}
                <div className=' addquantity '>

               <form onSubmit={updateQuentity}>
               <input  type="text" name="quentity" placeholder='Quantity'  />
               <input className='form-submit' type="submit" value="Restock" />
             </form>
            </div>
             </div>    
    
  </div>

  <div className='mt-5 manage-button '>
             <Link to="/ManageCamera"> 
        <button  className='btn btn-dark  text-light rounded-0'>Manage Camera</button>
                 </Link> 
             </div>
            


</div>


            
        </div>
    );
};

export default ProductDetail;