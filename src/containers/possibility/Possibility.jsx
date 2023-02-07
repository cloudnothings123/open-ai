import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>
          Request early access to learn more.
        </h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination.
        </h1>
        <p>
          GPT-3 takes everything you could ever find from a Google search and stores it all in one place. It behaves like Alexa, Siri and Echo combined - it will learn your speech patterns, daily routines, and help you with anything and everything you could possibly need.
        </p>
        <h4>
          Request early access to learn more.
        </h4>
      </div>
    </div>
  )
}

export default Possibility
