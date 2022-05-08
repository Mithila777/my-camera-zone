import useReviews from '../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Home = () => {
    const [reviews,setReviews]=useReviews()
   
    
    return (
        <div>
        
             
         <div>
             <div className='userreview'>
             <h2> User Reviews</h2>    

             </div>
              <div className='reviews'>
              {
                  reviews.map(review=>
                    <Review key={review.id} review={review}></Review>
                    
                    )
              }
              </div>

         </div>


        </div>



    );
};

export default Home;