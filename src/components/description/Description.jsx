import React from 'react'

import './style.scss'

const Description = (props) => {
    return (
        <div className="description">
            <h1> {props.title} </h1>
            <h3>{props.subTitle}</h3>
            <p>
            {props.text}
            </p>
            <button>Learn More &gt;</button>
        </div>
    )
}

export default Description