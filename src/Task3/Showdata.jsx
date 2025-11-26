import React, { useState } from 'react'
import  {products}  from './random'


function Showdata() {
    const [data,showdata]=useState(null)

    const handleshow=()=>{
        let productindex=Math.floor(Math.random()* products.length);
        let product=products[productindex];

        let modelindex=Math.floor(Math.random()* product.details.models.length);
        let model=product.details.models[modelindex];

        showdata({
            category:product.category,
            brand:product.details.brand,
            model:model
        })
    }
  return (
    <div>
      <h1>Mobile data's</h1>
      <button onClick={handleshow}>Show</button>

       {data &&  <div>
            <h3>category: {data.category}</h3>
            <h3>Brand: {data.brand} </h3>

            
           {data.model &&(
           <> <h3>model name: {data.model.name}</h3>
            {"price" in data.model &&
            <h3>model price: {data.model.price} </h3>
            }
            { data.model.extra &&
                <div>
            <h3>model author: {data.model.extra.author} </h3>
            <h3>model pages: {data.model.extra.pages} </h3>
                </div>
}
           </>)}
        </div>}

    </div>
  )
}

export default Showdata
