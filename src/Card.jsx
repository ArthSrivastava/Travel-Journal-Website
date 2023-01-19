import React from "react";

export default function Card(props) {
  return (
    <div className="card-surround">
      <div className="card">
        <img
          src={props.item.imageUrl}
          className="card--image"
          alt="card-image"
        />
        <div className="info">
          <div className="infoTop">
            <img
              src="src/assets/location-pointer.png"
              alt="location-pointer"
              className="location-pointer"
            />
            <h3 className="card--countryName">{props.item.location}</h3>
            <a
              href={props.item.googleMapsUrl}
              className="card--googleMapsLink"
            >
              View on Google Maps
            </a>
          </div>
          <h2 className="card--locationName">{props.item.title}</h2>
          <h3 className="card--dateOfVisit">{props.item.startDate} - {props.item.endDate}</h3>
          <p className="card--description">
            {props.item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
