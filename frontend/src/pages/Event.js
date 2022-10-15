import React from 'react'
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import EventMap from '../components/EventMap';

import data from '../data';

const Event = ({events}) => {
    const params = useParams()
    const event = data.events.find((p) => p._id === params.id);

  return (
    // <div>{event.name}</div>
       
    <Layout title={event.name}>
    
      <EventMap event={event} />
    
 
      <div className='event-details'>
        <div className='controls'>
          <Link to={`/events/edit/${event.slug}`}>
 
               Edit Event
      
          </Link>
          <Link to="#" className='delete' >
            {/* <FaTimes /> */}
            Delete Event
          </Link>
        </div>
        <span>
          {event.date} at {event.time}
        </span>
        <h1>{event.name}</h1>
        {event.image && (
          <div className='image'>
            {/* <Image src={event.image}  loader={myLoader} width={960} height={600} /> */}
            <img src={event.image}  width={960} height={600}  alt={event.name}/>
          </div>
        )}
       
      
       <h3>Description:</h3>
       <p>{event.description}</p>
       <h3>Venue:{event.venue}</h3>
       <p>{event.address}</p>
       
       
       <Link to='/' className='back'>
        
          {'<'} Go Back

       </Link>
     
      </div>

    </Layout>
  )
}

export default Event