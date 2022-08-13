import React from 'react'

export default function Card(props) {
    let location = props.location
    location.toUpperCase()
    
    
    return(
        <article>
            <div className='imageContainer'>
                {/* image */}
                <img src={props.imageUrl} alt={`${location}`}/>
            </div>
            <div className='textContainer'>
                {/* Country / maps */}
                <div>
                    <i class="fa-solid fa-location-dot locationIcon"></i>
                    <span className='country'>{props.location} </span>
                    <a href={`${props.googleMapsUrl}`} target="_blank" rel="noreferrer">View in google maps</a> 
                </div>
                {/* Name of site */}
                <div className='visited'>{props.title}</div>
                {/* date of visit */}
                <div className='date'>{props.startDate} - {props.endDate}</div>
                {/* Description */}
                <div className='description'>{props.description}</div>
            </div>
        </article>
    )
}