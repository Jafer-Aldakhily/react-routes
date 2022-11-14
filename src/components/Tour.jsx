import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import {Link, useParams} from 'react-router-dom'
import CitiesContext from '../CitiesContext';
export default function Tour() {
    const {id} = useParams()
    // const [cities,setCities] = useState(data.cities)
    const {cities} = useContext(CitiesContext)
    const [city,setCity] = useState({})
    useEffect(() => {
       const result =  cities.filter(city => city.id == id)
       setCity(result[0])
       console.log(city);
    },[])
  return (
<>
    <div className="container">
      <div className="row">
      <div className="col-md-4">
      <div className="card mb-2">
      <img src={city.image} className="card-img-top" alt={city.image} style={{ height:"300px" }}/>
      <div className="card-body">
        <h5 className="card-title">{city.name}</h5>
        <Link to="/" className="btn btn-primary">Back to home</Link>
      </div>
      </div>
        </div>
      </div>
    </div>
    </>
  )
}

// "id":1,
// "name":"Petra",
// "info" : "some info for petra",
// "image" : "https://lp-cms-production.imgix.net/2019-06/2bf1faac5c1e26d5cb94128cf762517a-petra.jpg",
// "price":10
