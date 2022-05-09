import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateCamera.css'


const UpdateCamera = () => {
        const { Id } = useParams();
        const [camera, setCamera] = useState({});
        
    
        useEffect( () =>{
            const url = `http://localhost:5000/camera/${Id}`;
            fetch(url)
            .then(res=> res.json())
            .then(data => setCamera(data));
    
        }, []);

    
    const handleUpdateCamera = event =>{
        event.preventDefault();
        const addername = event.target.Addername.value;
        const name = event.target.productName.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quentity.value;
        const supplier = event.target.supplier.value;
        const img = event.target.image.value;
        const sold =0;

        

        const UpdateCamera= {addername, name,description,img, price,quantity,supplier,sold};

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
            alert('Camera  Update successfully!!!');
            event.target.reset();
        })
    }
    return (
        <div>
            <div className='registration'>
{            console.log(camera.description )
}
            <h2>Update a Camera</h2>
            <form onSubmit={handleUpdateCamera}>
                <input type="hidden" name="Addername" placeholder='Name' value='Mithila'  />
                <input type="text" name="productName" placeholder='Product Name' Value={camera.name}  />
                <br/>
                <input type="text" style={{height:'80px',wordBreak:'break-all',wordWrap:'break-word'} }name="description" placeholder='Description'Value={camera.description}  />
                <br />
                <input type="text" name="price" placeholder='Price' Value={camera.price}  />
                <input type="text" name="quentity" placeholder='Quentity' Value={camera.quantity}  />
                <br />
                <input type="text" name="supplier" placeholder='Supplier'Value={camera.supplier} />
                <br />
                <input type="text" name="image" placeholder='Photo URL' Value={camera.img} />
                <br />
                <input className='form-submit' type="submit" value="Update Camera" />

            </form>
            </div>
        </div>
    );
};

export default UpdateCamera;
