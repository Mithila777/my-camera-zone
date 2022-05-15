import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import useProducts from '../hooks/useProducts';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));      




const Myitems = () => {
    const [user,loading] = useAuthState(auth);
   const username= user.displayName;
    const [products,setProducts]=useProducts();
    const navigate = useNavigate();
    const myproducts = products.filter(product => product.addername === username);


    const navigateToUpdateCamera = id =>{
        navigate(`/UpdateCamera/${id}`);
    }
    const navigateToProductDetail = id =>{
        navigate(`/Product/${id}`);
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
        <div  className='container'>
                 <h2 className='mt-5 '>My Cameras</h2>

            <div className='table-box'>
      <Table>
          <tr>
            <th align="right">Name</th>
            <th align="right">Photo</th>
            <th align="right">Price</th>
            <th align="right">Quentity</th>
            <th align="right">Sold</th>
            <th align="right">Supplier</th>
            <th align="right">Manage</th>
            

          </tr>
        <TableBody>
        {myproducts.map(product=>
            <StyledTableRow >
              <td align="right">{product.name}</td>
              <td align="right"><img className='tableimage' src={product.img} alt="" /></td>
              <td align="right">{product.price}</td>
              <td align="right">{product.quantity}</td>
              <td align="right">{product.sold}</td>
              <td align="right">{product.supplier}</td>
              <td align="right">
              <div class="col-sm">
     <button onClick={() => navigateToProductDetail(product._id)} className='btn btn-dark text-light border-light rounded-0 '>
    <FontAwesomeIcon icon={faPenSquare} /></button>
 
    <button  onClick={() => handleDelete(product._id)} className='btn btn-dark border-light  text-light rounded-0'>
    <FontAwesomeIcon icon={ faTrash} /></button>

    </div>   
                  </td>
              
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
      </div>

    <div className='manage-button mt-3'>
             
             <Link to="/AddCamera"> 
          <button  className='btn btn-dark  text-light rounded-0'>Add Camera <span>  </span>
           <FontAwesomeIcon icon={ faArrowRight}/></button>
                   </Link> 
           </div>

            
        </div>
    );
};

export default Myitems;