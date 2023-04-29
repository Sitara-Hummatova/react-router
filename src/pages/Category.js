import axios from 'axios'
import React from 'react'

const Category = () => {

 axios
    .get(`https://northwind.vercel.app/api/suppliers`)
    
    .then(Response=>{
      console.log(Response.data);
    })

  return (
    <div>Category</div>
  )
}

export default Category