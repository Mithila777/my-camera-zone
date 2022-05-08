import React from 'react';
import './Home.css'
import  image1   from  '../Images/l1.jpg';
import  image2   from  '../Images/rsz_1freddy-do-zp6xo3akioe-unsplash.jpg';
import  image3   from  '../Images/jason-leung-LM8O6HIgnRE-unsplash.jpg';
import  image4   from  '../Images/jason-leung-o08u5jVuy00-unsplash.jpg';
import  image5   from  '../Images/dan-gold-m-u31puVzMQ-unsplash (1).jpg';
import  image7  from  '../Images/alejandro-barba-c1BK0zKAMmQ-unsplash.jpg';
import Product from '../Product/Product';
import useProducts from '../hooks/useProducts';




const Home = () => {
    const [products,setProducts]=useProducts();
    
    let size=6;
    return (
        <div>
        <div className='container'>
             <div class="row ">
    <div className="col-md-6">
     <div className=" image-box ">
       <div className='image'></div>
     </div>
    </div>
    <div class="col-md-6">
      <div class="image-discription "><div>
            <h1>TAKE A SHOT </h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis labore iste laborum quo minus! Accusantium ad, explicabo
               minima culpa tempore placeat nihil adipisci distinctio! Perspiciatis cum in architecto maxime harum.

            </p>
            <button class="btn  btn-dark rounded-0"> More info</button>

        </div></div>
    </div>
  </div>
        </div>


        <div class="container bg-dark text-light p-3 ps-0 pe-0">
  <div class="row">
    <div class="col-sm">
       <p>2k+</p>
       <h6>Cameras</h6>
    </div>
    <div class="col-sm">
      <p>50+</p>
      <h6>Suppliers</h6>
    </div>
    <div class="col-sm">
      <p> 10+</p>
      <h6>Stores</h6>
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

         </div>

             


         

         <div >
    <div class="container  photo  h-200 px-2">
  <div class="row gx-2">
    <div class="col-lg-4 col-sm-12">
     <div class="   galary-title">   <h3> Best Camara Lans</h3>
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