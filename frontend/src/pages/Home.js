import React from 'react'
import Layout from '../components/Layout'
import data from '../data'
import EventItem from '../components/EventItem'
import Showcase from '../components/Showcase'

const Home = () => {
  return (
    <>
  
    <Layout>
       
    <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
      {data.events.map((event) => (
        
          <EventItem event={event} key={event._id}>
            {event.name}
          </EventItem>
      
       
      ))}
    
    </div>
    <h1>HomePage</h1>
  </Layout>
  </>
  )
}

export default Home