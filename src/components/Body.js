import React from "react";
import "./Body.css";

function Body(props) {
  return (
    <section className='travel-main'>
      <div className='img-text-combo'>
        <img
          className='location-photo'
          // src='https://source.unsplash.com/WLxQvbMyfas'
          src={props.photo}
          alt='Mount Fuji'
        />
        <div className='info-text'>
          <div className='location-info'>
            <div className='pin-img-country'>
              <img
                src='./location-dot.png'
                alt='location dot'
              />
              <p className='country-text'>{props.country.toUpperCase()}</p>
            </div>
            <a
              className='maps-link'
              href={props.mapsLink}>
              View on Google Maps
            </a>
          </div>
          <h2 className='location-name'>Mount Fuji</h2>
          <p className='date-range'>{props.startDate + " - " + props.endDate}</p>
          <p className='destination-description'>{props.description}</p>
        </div>
      </div>
    </section>
  );
}

export default Body;
