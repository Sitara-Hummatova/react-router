import React from 'react'




const Orders = (name,surname) => {
    function handleSubmit(e){
        fetch("https://northwind.vercel.app/api/suppliers",{
            method:"POST",
            headers: {
                "Conent-Type" : "application/json"
            },
            body: JSON.stringify(
                {
                    companyName:name,
                    contactName:surname,
                    
                }),
        })
        .then((response) =>response.json())
        .tehn ((data)=>handleSubmit(data))
    }
 
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            value={name} onChange={(event)=>(event.target.value)}
            type='text' placeholder='Enter name'/>
            <input
            value={surname} onChange={(event)=>(event.target.value)}
            type='text' placeholder='Enter surname'/>
            <button type='submit'> Click me </button>
           

        </form>
    </div>
  )
}

export default Orders