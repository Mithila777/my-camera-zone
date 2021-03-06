import React, {useState, useEffect } from 'react';
import './Home.css'
import  image1   from  '../Images/l1.jpg';
import  image2   from  '../Images/rsz_1freddy-do-zp6xo3akioe-unsplash.jpg';
import  image3   from  '../Images/jason-leung-LM8O6HIgnRE-unsplash.jpg';
import  image4   from  '../Images/jason-leung-o08u5jVuy00-unsplash.jpg';
import  image5   from  '../Images/dan-gold-m-u31puVzMQ-unsplash (1).jpg';
import  image7  from  '../Images/alejandro-barba-c1BK0zKAMmQ-unsplash.jpg';
import Product from '../Product/Product';
import useProducts from '../hooks/useProducts';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { faTruckField } from '@fortawesome/free-solid-svg-icons';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';





const Home = () => {
  // const [ spinner, setSpinner ] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => setSpinner(false), 1000)
  // }, []);


    const [products,setProducts]=useProducts();
    // const myproducts = products.find(Math.max());
    // var  x = age.find(adult);

    let size=8;
    return (
      // !spinner &&  
      <div>

        <div className='container'>
             <div class="row ">
    <div className="col-md-6 image-border">
     <div className=" image-box ">
       <div className='image'></div>
     </div>
    </div>
    <div className="col-md-6">
      <div className="image-discription "><div>
            <h1>TAKE A SHOT </h1>
            <p>Capture incredible detail with low-noise thanks to a full-frame sensor delivering 8K video recording up to 30fps
               (or 60fps with an external power supply),oversampled 4K / Full HD content and captivating 4K slow-motion
                up to 120fps.

            </p>
            <button class="btn   btn-dark rounded-0"> More info</button>

        </div></div>
    </div>
  </div>
        </div>


        <div class=" store-info bg-dark text-light mt-5 p-3 ps-0 pe-0">
  <div class="row">
    <div class="col-sm ">
      <p><FontAwesomeIcon icon={faUser} /></p>
       <p>Trusted by over 2k+ Clients</p>
       <p>Since 2010</p>
    </div>
    <div class="col-sm">
      <p><FontAwesomeIcon icon={faTruckField} /></p>
      <p>350+</p>
      <p>Suppliers</p>
    </div>
    <div class="col-sm">
      <p> <FontAwesomeIcon icon={  faStore}/></p>
          <p>  20+</p>
      <p> Stores</p>
    </div>
  </div>
</div>

         <div>
         <div>
             <h3 class="service-title mt-5"> Products</h3>    

             </div>
              <div className='products'>

              {     

                  
                  products.slice(0,size).map(product=>
                    <Product key={product.id} product ={product}></Product>
                    
                    )
              }
                        
              
              </div>
              
             <div className='mt-5 mb-2 manage-button'>
             <Link to="/ManageCamera"> 
        <button  className='btn btn-dark  text-light rounded-0'>Manage Cameras <span>  </span>
        <FontAwesomeIcon icon={ faArrowRight}/></button>
                 </Link> 
             </div>
             
         </div> 


         

         <div >
    <div class="  photo  h-200 px-2">
  <div class="row gx-2">
    <div class="col-lg-4 col-sm-12">
     <div class="   galary-title ">   <h3> Best Camara Lans</h3>
</div>
    </div>
    <div class="col-lg-8 col-sm-12">
    <div >
              
              <div class='gallery pt-3'>
      <figure class='gallery__item gallery__item--1'>
          <img src={image1} alt="" className=" gallery__img " srcset="" />
      </figure>
      <figure class="gallery__item gallery__item--2">
      <img src={image2} alt="" className="gallery__img" srcset="" />
      </figure>
      <figure class="gallery__item gallery__item--3">
      <img src={image7} alt="" class="gallery__img" srcset="" />
      </figure>
      <figure class="gallery__item gallery__item--4">
      <img src={image3} alt="" class="gallery__img" srcset="" />
      </figure>
      <figure class="gallery__item gallery__item--5">
      <img src={image5} alt="" class="gallery__img img-fluid" srcset="" />
      </figure>
      <figure class="gallery__item gallery__item--6">
      <img src={image4} alt="" class="gallery__img img-fluid" srcset="" />
      </figure>
    </div>
            </div>
    
    </div>
  </div>
</div>
         

          </div>

         </div>






    );
};

export default Home;