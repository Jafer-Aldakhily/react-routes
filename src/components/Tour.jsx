import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import data from '../data.json'
export default function Tour() {
    const {id} = useParams()
    const [cities,setCities] = useState(data.cities)

    useEffect(() => {
      setCities(() => {
        cities : [...cities].filter((city) => city.id == id).map((city) => city) 
      }
      )
    },[])
  return (
    <div>
      {cities[0]}
      {/* <h1>Name {visitedCity.cityname}</h1> */}
    </div>
  )
}
