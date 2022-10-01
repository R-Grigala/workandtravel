import "./WorkCard.css"

import React from 'react';
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
        <h2 className="project-title">{props.title}</h2>
        <img src={props.imgsrc} alt="project-card-img" />
        <div className="proj-details">
            <p>{props.text}</p>
            <h4>
                <span className="author">author:</span>
                <span className="author-name">Levan Gorgadze</span>
            </h4>
            
            <div className="proj-btns">
                <NavLink to="url.com" 
                    className="btn">More</NavLink>

                {/* <NavLink to="url.com" 
                    className="btn">Beginning</NavLink> */}
            </div>
        </div>
    </div>
  )
}

export default WorkCard