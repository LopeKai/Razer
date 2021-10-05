import React from 'react'

import './style.css'

const Description = (props) => {
    let classesButton = 'button'
    classesButton += props.buttonNone ? ' buttonNone' : ''
    classesButton += props.buttonBlock ? ' buttonBlock': ''

    let classesTitle = 'title'
    classesTitle += props.titleWhite ? ' titleWhite' : ''
    classesTitle += props.titleGreen ? ' titleGreen' : ''

    return (
        <div className="description">
            <h1 className={classesTitle}> {props.titleWhite} </h1>
            <h3>{props.subTitle}</h3>
            <p>
                {props.textTitle}
            </p>
            <p>
                {props.text}
            </p>
            <p>
                {props.textSub}
            </p>
            <button className={classesButton}>{props.buttonDescription}</button>
        </div>
        // Learn More &gt;
    )
}

export default Description