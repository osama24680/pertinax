import React from 'react'
import "./HeadingText.scss"
const HeadingText = ({ greenText, shadowText, whiteText }) => {
    return (
        <div className="HeadingText">
            <h2>{greenText}</h2>
            <h1><span>{shadowText}</span> {whiteText}</h1>
        </div>
    )
}

export default HeadingText
