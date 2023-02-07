import React from 'react'
import { Feature } from '../../components'
import './whatgpt3.css'

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="The future has never felt so close. GPT-3 can change the way you interact with the internet and the world." />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Explore The Library
        </p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="GPT-3 can make a chatbot so real that it feels like talking to a human being." />
        <Feature title="Knowledgebase" text="GPT-3 can draw from its knowledge of everything ever written on the internet." />
        <Feature title="Education" text="GPT-3 is a great teacher, and a fast replacement for the hours it'd take a human to do the same thing." />
      </div>
    </div>
  )
}

export default WhatGPT3
