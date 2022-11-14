import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import CitiesContext from '../CitiesContext';
export default function Tours() {
  const {cities} = useContext(CitiesContext)
  // const [cities,setCities] = useState(citiesData)
  return (
    <div className="container">
      <div className="row">
      {
      cities.map((city,index) => {
      return (
      <div className="col-md-4" key={index}>
      <div className="card mb-2">
      <img src={city.image} className="card-img-top" alt={city.image} style={{ height:"300px" }}/>
      <div className="card-body">
        <h5 className="card-title">{city.name}</h5>
        <Link to={`city/${city.id}`} key={city.id} className="btn btn-primary">Read more</Link>
      </div>
      </div>
        </div>
      )
        })
      }
      </div>
    </div>
  )
}
