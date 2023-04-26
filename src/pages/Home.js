import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
   
    const navigate =useNavigate()

    const goOrders = () => {
        navigate('/Orders')
    }

    const goCategory = () =>{
        navigate('/Category')
    }








  return (
    <div style={{display: "flex" , justifyContent: "Center" , alignItems: "Center" , gap:50}}>
        <h3 onClick={goOrders}>Orders</h3>
        <h3 onClick={goCategory}>Category</h3>
    </div>
  )
}

export default Home