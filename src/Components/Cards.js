import React from 'react'




function Cards({data}) {
    let {image,title, description,price}=data;
  return (
    <div className="col-lg-3 col-md-6 py-2 ">
       <div className="card" style={{width: '18rem'}}>
        <img src={image} height={200} width={200} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,13)}</h5>
          <p className="card-text">{description.slice(0,80)}-------</p>
          <h3>${price}</h3>
          <a href="#" className="btn btn-primary">Add To Cart</a>
          
        </div>

        </div>
              </div>
  )
}

export default Cards