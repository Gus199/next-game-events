import React from 'react';
import { Link } from 'react-router-dom';


const EventItem = ({ event }) => {


  return (
    <div>
      <div className='event'>
        <div className='img'>
          <img src={event.image} alt={event.name} width={170} height={100} />
        </div>
        <div className='info'>
          <span>
            {event.date} at {event.time}
          </span>
          <h3>{event.name}</h3>
        </div>
        <div className='link'>
          <Link to={`/event/${event._id}`} className='btn'>
            {/* <a >Details</a> */}
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
