import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddCamera = () => {
    const [user] = useAuthState(auth);

    const handleAddCamera = event =>{
        event.preventDefault();
        const addername = event.target.Addername.value;
        const name = event.target.productName.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quentity.value;
        const supplier = event.target.supplier.value;
        const img = event.target.image.value;
        const sold =0;


        

        const camera = {addername,name,description,img, price,quantity,supplier,sold};

           const url = `http://localhost:5000/camera`;
           fetch(url, {
               method: 'POST',
               headers: {
                   'content-type': 'application/json'
               },
               body: JSON.stringify(camera)
           })
           .then(res=> res.json())
           .then(result =>{
            alert('Camera  added successfully!!!');
             event.target.Addername.value='';
             event.target.productName.value=''
             event.target.description.value=''
             event.target.price.value='';
             event.target.quentity.value='';
             event.target.supplier.value='';
             event.target.image.value='';
               console.log(result);
           } )
    }
    return (
        <div>
            <div className='registration'>
            <h2>Add a new Product</h2>
            <form onSubmit={handleAddCamera}>
                <input type="hidden" name="Addername" placeholder='Name' value={user.displayName} required  />
                <input type="text" name="productName" placeholder='Product Name' required />
                <br/>
                <textarea type="text" name="description" placeholder='Description' required />
                <br />
                <input type="text" name="price" placeholder='Price' required />
                <input type="text" name="quentity" placeholder='Quentity' required />
                <br />
                <input type="text" name="supplier" placeholder='Supplier' required />
                <br />
                <input type="text" name="image" placeholder='Photo URL' required />
                <br />
                <input className='form-submit' type="submit" value="Add Product"  required/>
            </form>
            </div>
        </div>
    );
};

export default AddCamera;
