
import { useState, useEffect } from 'react'
import Map, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Geocode from 'react-geocode'
// import styles from "@/styles/Map.module.css";

export default function EventMap({ event }) {
  
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [loading, setLoading] = useState(true)
  const [viewport, setViewport] = useState({
    latitude: 40.712772,
    longitude: -73.935242,
    width:"100vw" ,
    height:"100vh",
    zoom: 14,

  
  })

  useEffect(() => {
    // Get latitude & longitude from address.
    Geocode.fromAddress(event.address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location
        setLat(lat)
        setLng(lng)
        setViewport({ ...viewport, latitude: lat, longitude: lng, })
        setLoading(false)
      },
      (error) => {
        console.error(error)
      }
    )
  }, [])

  Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY)

  if (loading) return false

  return (
    <Map  
      {...viewport}
      // width="100vw" 
      // height="100vh"
       mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
     // mapboxApiAccessToken="pk.eyJ1IjoiYW1hcjE5OSIsImEiOiJjbDdnazdjbzgwNTdxM3Vwb2o4eGpqOXJnIn0.1_aYwQVLkeknjW3iCuzIMQ"
       mapStyle='mapbox://styles/amar199/cl7flmtiy000514l2s2fm1t4n'
      onViewportChange={(vp) => setViewport(vp)}
      
    >
      <div className='mapit' key={event.id} latitude={lat} longitude={lng} >
        
        here at
      </div>
    </Map>
  )
}
{/* <div ></div> */}
