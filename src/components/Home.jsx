import React from 'react'
import { useContext } from 'react'
import CitiesContext from '../CitiesContext'
import Tours from './Tours'
export default function Home() {
  const {cities} = useContext(CitiesContext)
  return (
    <div>
      <hr />
      <h1 className="mb-5 text-center">Most visited places in Jordan</h1>

      <Tours cities={cities}/>
    </div>
  )
}
